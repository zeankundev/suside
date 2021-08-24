import { join } from 'path'
import { sanitizePath  } from '../utils'

const listFolder = ({ folderPath, emitter }) => {
	const fs = window.require('fs')
	let folderDir = sanitizePath(folderPath)
	fs.readdir(folderDir,(err, list)=>{
		if(err){
			console.log(err)
		}else{
			const computedItems = list.map( item => {
				const directory = join(folderDir,item)
				return {
					name: item,
					isFolder: fs.lstatSync(directory).isDirectory()
				}
			})
			emitter.emit('message',{
				type: 'returnlistFolder',
				content:{
					folderPath,
					folderItems: computedItems
				}
			})
		} 
	})
}

export default listFolder