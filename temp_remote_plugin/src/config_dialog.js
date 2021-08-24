const configDialog = ({ puffin, Window, SideMenu, drac }) => {
	return new Promise((resolve, reject)=>{
		const configWindow = new Window({
			width: '550px',
			height: '450px',
			component(){
				const styleWrapper = puffin.style`
					& > * {
						display: block;
						margin: 10px 0px;
					}
				`
				
				function connectFromCode(){
					const username = document.getElementById('username_code').value 
					const code = document.getElementById('code_code').value.split('##')
					
					const room = code[0]
					const password = code[1]
					
					resolve({
						room,
						username,
						password
					})
					configWindow.close()
				}
				
				function connectRandomly(){
					const username = document.getElementById('username_random').value 
					const room = (Math.random()*100).toString().slice(0, 5) + username.slice(0, 6)
					const password = Math.random().toString().repeat(32).substring(0,32)
					resolve({
						room,
						username,
						password
					})
					configWindow.close()
				}
				
				function connectManually(){
					const room = document.getElementById('room_manually').value || 'public'
					const username = document.getElementById('username_manually').value 
					const password = document.getElementById('password_manually').value.repeat(32).substring(0,32)
					resolve({
						room,
						username,
						password
					})
					configWindow.close()
				}
				
				
				return puffin.element({
					components:{
						SideMenu,
						Input: drac.Input,
						Button: drac.Button
					}
				})`
				<SideMenu default="normal">
					<div>
						<h1>Remote</h1>
						<label to="normal">Normal</label>
						<label to="code">With Code</label>
						<label to="random">Random</label>
					</div>
					<div>
						<div href="normal" class="${styleWrapper}">
							<label>Room</label> 
							<Input placeHolder="CodeParty" id="room_manually"/>
							<label>Username</label> 
							<Input placeHolder="Superman" id="username_manually"/>
							<label>Password</label> 
							<Input type="password" id="password_manually"/>
							<Button :click="${connectManually}">Connect</Button>
						</div>
						<div href="code" class="${styleWrapper}">
							<label>Code</label> 
							<Input placeHolder="party##supersecret" id="code_code"/>
							<label>Username</label> 
							<Input placeHolder="Superman" id="username_code"/>
							<Button :click="${connectFromCode}">Connect</Button>
						</div>
						<div href="random" class="${styleWrapper}">
							<label>Your name</label> 
							<Input placeHolder="Superman" id="username_random"/>
							<Button :click="${connectRandomly}">Connect</Button>
						</div>
					</div>
				</SideMenu>
				`
			}
		})
		configWindow.launch()
	})
}

export default configDialog