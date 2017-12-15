function replaceChannelOptionInPublishChannelSelect(loggedInChannel) {
    // remove the old channel option
    const oldChannel = document.getElementById('publish-channel-select-channel-option')
    if (oldChannel){
        oldChannel.parentNode.removeChild(oldChannel);
    }
    // create new channel option
    const newChannelOption = document.createElement('option');
    newChannelOption.setAttribute('value', loggedInChannel);
    newChannelOption.setAttribute('id', 'publish-channel-select-channel-option');
    newChannelOption.setAttribute('selected', '');
    newChannelOption.innerText = loggedInChannel;
    // add the new option
    const channelSelect = document.getElementById('channel-name-select');
    channelSelect.insertBefore(newChannelOption, channelSelect.firstChild);
    // carry out channel selection
    toggleSelectedChannel(loggedInChannel);
}

function replaceChannelOptionInNavBarChannelSelect (loggedInChannel) {
    // remove the old channel option
    const oldChannel = document.getElementById('nav-bar-channel-select-channel-option');
    if (oldChannel){
        oldChannel.parentNode.removeChild(oldChannel);
    }
    // create new channel option & select it
    const newChannelOption = document.createElement('option');
    newChannelOption.setAttribute('value', loggedInChannel);
    newChannelOption.setAttribute('id', 'nav-bar-channel-select-channel-option');
    newChannelOption.setAttribute('selected', '');
    newChannelOption.innerText = loggedInChannel;
    // add the new option
    const channelSelect = document.getElementById('nav-bar-channel-select');
    channelSelect.style.display = 'inline-block';
    channelSelect.insertBefore(newChannelOption, channelSelect.firstChild);
    // hide login
    const navBarLoginLink = document.getElementById('nav-bar-login-link');
    navBarLoginLink.style.display = 'none';
}

function loginToChannel (event) {
    const userName = document.getElementById('channel-login-name-input').value;
    const password = document.getElementById('channel-login-password-input').value;
    // prevent default
    event.preventDefault()
    validationFunctions.validateNewChannelLogin(userName, password)
        .then(() => {
            return sendAuthRequest(userName, password, '/login')
        })
        .then(result => {
            setUserCookies(result.channelName, result.channelClaimId, result.shortChannelId);
            // if user is on the home page, update the needed elements without reloading
            if (window.location.pathname === '/') {
                replaceChannelOptionInPublishChannelSelect(result.channelName);
                replaceChannelOptionInNavBarChannelSelect(result.channelName);
            // if user is not on home page, redirect to home page
            } else {
                window.location = '/';
            }

        })
        .catch(error => {
            const loginErrorDisplayElement = document.getElementById('login-error-display-element');
            if (error.name){
                validationFunctions.showError(loginErrorDisplayElement, error.message);
            } else {
                validationFunctions.showError(loginErrorDisplayElement, 'There was an error logging into your channel');
            }
        })
}
