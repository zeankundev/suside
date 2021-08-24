const getFileContent = ({
	emitter, 
	filePath
}) => {
	return new Promise((resolve, reject ) => {
		emitter.emit('message',{
			type: 'getFileContent',
			content:{
				filePath
			}
		})
		emitter.on('returnGetFileContent',({ filePath: returnFilePath, fileContent }) => {
			if( filePath === returnFilePath ){
				resolve(fileContent)
			}
		})
	})
}

export default getFileContent