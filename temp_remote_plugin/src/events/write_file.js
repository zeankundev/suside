import { sanitizePath  } from '../utils'

const writeFile = ({ emitter, filePath, fileContent }) => {
	const fs = window.require('fs')
	fs.writeFile(sanitizePath(filePath), fileContent, (err) => {
		if(err) console.log(err)
	})
}

export default writeFile