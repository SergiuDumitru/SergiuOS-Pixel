import SetBackgroundSetting from './SetBackgroundSetting';

const Settings = () => {


  return (
    <div id='settings' className="nes-container is-dark">
      <h1>Settings Page</h1>

      <div className='settingsContainer'>
        <SetBackgroundSetting />

        <div className='setting nes-container is-dark'>
          <h3>Theme Settings</h3>
          <div>
            <div style={{backgroundColor: "#212529", padding:" 1rem 0"}}>
              <label>
                <input type="checkbox" class="nes-checkbox is-dark" checked />
                <span>Dark</span>
              </label>
            </div>
          </div>
        </div>
        <div className='setting nes-container is-dark'>set 3</div>
      </div>




    </div>
  );
};

export default Settings;