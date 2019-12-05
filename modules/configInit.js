const fs = require('fs')
const globalAppData = require('./globalAppData')

const DECIMAL_BASE = 10

module.exports = _ => {
	let config = fs.readFileSync('store/config.json')
	if (!config) {
		console.log('Error reading store/config.json\nresult:',config)
		throw config
	}
	try{
		config = JSON.parse(config)
	}catch(e){
		console.log('Error parsing store/config.json\n',config)
		throw e
	}
	const port = Number.parseInt( config.port , DECIMAL_BASE )
	if (isNaN(port)) {
		throw `config.port (${config.port}) must be a positive integer!`
	}
	if (port < 1) {
		throw `config.port must be a positive integer`
	}
	globalAppData.tracksDir = config.tracksDir
	globalAppData.port = port
}