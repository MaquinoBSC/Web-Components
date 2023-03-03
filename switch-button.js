class SwitchButton extends HTMLElement {
    constructor() {
        super();
        this._isHidden = true;
        this._main_button;
        this._main_text;
        this.attachShadow({ 'mode': 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                #main-text {
                    display: none;
                    color: white;
                    background-color: black;
                    position: absolute;
                }
            </style>
            <div>
                <button id='main-button'>Show</button>
                <p id='main-text'>More Info!</p>
            </div>
        `
    }

    connectedCallback() {
        this._main_button = this.shadowRoot.getElementById('main-button');
        this._main_text = this.shadowRoot.getElementById('main-text');

        this._main_button.addEventListener('click', () => this._switchStatus());
    }

    _switchStatus() {
        if (this._isHidden) {
            this._main_button.textContent = 'Hide';
            this._main_text.style.display = 'block';
        }
        else {
            this._main_button.textContent = 'Show';
            this._main_text.style.display = 'none';
        }

        this._isHidden = !this._isHidden;
    }
}

customElements.define('mhc-switch-button', SwitchButton);