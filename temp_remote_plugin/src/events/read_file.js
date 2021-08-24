import { sanitizePath  } from '../utils'

const readFile = ({ emitter, filePath }) => {
	const fs = window.require('fs')
	fs.readFile(sanitizePath(filePath),'UTF-8', (err, fileContent) => {
		if(!err){
			emitter.emit('message',{
				type: 'returnGetFileContent',
				content:{
					filePath: sanitizePath(filePath),
					fileContent
				}
			})
		}else{
			console.error(err)
		}
	})
}

export default readFile