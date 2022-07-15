import natAlert from './main.mjs'

document.getElementById('default-btn').addEventListener('click', () => natAlert.default('Show me default!'))
document.getElementById('success-btn').addEventListener('click', () => natAlert.success('Show me success!'))
document.getElementById('error-btn').addEventListener('click', () => natAlert.error('Show me error!'))
