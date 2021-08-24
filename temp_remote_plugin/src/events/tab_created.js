import { sanitizePath  } from '../utils'

const tabCreated = ({ 
	emitter, 
	puffin, 
	directory, 
	instance, 
	client,
	tabElement,
	ContextMenu  
}) => {

	emitter.on('room/writeFileContent', async ({ filePath, fileContent }) => {
		if(filePath === directory){
			tabElement.state.emit('savedMe')
		}
	})
	
	const cursorClass = puffin.style`
		& {
			border-left-style: solid;
			border-left-width: 1px;
			cursor:pointer;
			margin: 0;
			padding: 0;
		}
	`
	let previousBookmark
	emitter.on('room/cursorSetIn', async ({ filePath, line, ch, senderUsername, senderUsercolor,  }) => {
		if( sanitizePath(directory) === sanitizePath(filePath) ){
			if(previousBookmark) previousBookmark.clear()
			const peerCursor = document.createElement('span');
			peerCursor.style.borderLeftColor = senderUsercolor;
			peerCursor.classList.add(cursorClass)
			let closeContext = null
			peerCursor.onmouseenter = event => {
				const { close } = new ContextMenu({
					list:[
						{
							label: senderUsername
						}
					],
					parent: document.body,
					event
				})
				closeContext = close
			}
			peerCursor.onmouseleave = event => {
				if(closeContext) {
					setTimeout(()=>{
						closeContext()
					},450)
				}
			}
			previousBookmark = client.do('setBookmark',{
				instance,
				line: line -1,
				ch: ch -1,
				element: peerCursor
			})
		}
	})
	emitter.on('room/contentModified', async ({ filePath, from, to, value }) => {
		if( sanitizePath(directory) === sanitizePath(filePath) ){
			client.do('replaceRange',{
				instance,
				from,
				to,
				text: value
			})
		}
	})
	client.do('onChanged',{ instance, action: (data, changeObj) => handleChanges({
		changeObj,
		emitter, 
		client, 
		instance,
		directory
	})})
	client.do('onActive',{ instance, action: (data, changeObj) => handleCursor({
		changeObj,
		client,
		instance,
		directory,emitter
	})})
}

let lastChange = null
const handleChanges = ({
	changeObj,
	emitter, 
	client, 
	instance, 
	directory
}) => {
	if(lastChange){ // Avoid initial value
		if(JSON.stringify(lastChange) == JSON.stringify(changeObj) || changeObj.origin === "+move") return //Prevent propagation
	}
	const lineValue = client.do('getLine',{
		instance,
		line: changeObj.from.line
	})
	emitter.emit('message',{
		type: 'contentModified',
		content: {
			from:{
				line: changeObj.from.line,
				ch: 0
			},
			to:{
				line: changeObj.to.line,
				ch: 9999
			},
			value: lineValue,
			filePath: directory
		}
	})
	lastChange = changeObj
}

const handleCursor = ({
	emitter, 
	client, 
	instance, 
	directory
}) => {
	const { line, ch } = client.do('getCursorPosition',{
		instance
	})
	emitter.emit('message',{
		type: 'cursorSetIn',
		content:{
			filePath: sanitizePath(directory),
			line,
			ch
		}
	})
}

export default tabCreated