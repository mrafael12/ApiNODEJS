const env = process.env.NODE_ENV || 'dev';  //Comando no cmd para mudar ambiente = set NODE_ENV=prod

const config = () => {

	switch(env) {
		
		case 'dev':
		return {
			bd_string : 'mongodb+srv://admin:123@clusterapi-gz9q7.mongodb.net/test?retryWrites=true',
			jwt_pass: 'batatafrita2019',
			jwt_expires_in: '7d'
		}

		case 'hml':
		return {
			bd_string : 'mongodb+srv://admin:123@clusterapi-gz9q7.mongodb.net/test?retryWrites=true',
			jwt_pass: 'batatafrita2019',
			jwt_expires_in: '3d'
		}

		case 'prod': 
		return {
			bd_string : 'mongodb+srv://admin:123@clusterapi-gz9q7.mongodb.net/test?retryWrites=true',
			jwt_pass: '$dksjdsjKJJKNAHklndkjshdjsn90808788',
			jwt_expires_in: '1d'
		}
	}
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();