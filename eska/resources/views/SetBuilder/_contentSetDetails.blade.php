<div class="set-details">
    <div class="content">
        <div class="header">Set Details</div>
        <div class="body">
            <div class="set-basic">
                <div class="set-date input-container">
                    <label for="setDateInput">Date</label>
                    <input type="date" id="setDateInput"/>
                    <i class="error">Do not leave empty</i>
                </div>
                <div class="set-name input-container">
                    <label for="setNameInput">Name</label>
                    <input type="text" id="setNameInput"/>
                    <i class="error">Do not leave empty</i>
                </div>
            </div>
            <div class="set-name input-container">
                <label for="setNameInput">Description</label>
                <textarea id="setNameDescription"></textarea>
            </div>
            <div class="set-roles">
                <div class="set-leader input-container">
                    <label for="setMainVocals">Main Vocals</label>
                    <select id="setMainVocals">
                        <option>Fred Balderama</option>
                        <option>Gab Piola</option>
                        <option>Gelo Noceja</option>
                        <option>Nori Esqueben</option>
                        <option>Precious Osabel</option>
                    </select>
                    <i class="error">Select one</i>
                </div>
                <div class="set-director input-container">
                    <label for="setDirector">Director</label>
                    <select id="setDirector">
                        <option>Jarwell Parcarey</option>
                        <option>Samuel Quinto</option>
                    </select>
                    <i class="error">Select one</i>
                </div>
            </div>
            <div class="set-other-roles">
                <label for="setSongLeader">Other Roles</label>
                <div class="set-roles-container">
                    <div class="set-role-item">
                        <select class="role-person">
                            <option>Hazel Noceja</option>
                            <option>Sam Quinto</option>
                        </select>
                        <select class="role-name">
                            <option>Back-up Vocals</option>
                            <option>Director</option>
                            <option>Drummer</option>
                        </select>
                        <button class="btn-action delete"><span class="material-icons">clear</span></button>
                        <button class="btn-action move"><span class="material-icons">drag_handle</span></button>
                    </div>
                </div>
                <button class="btn-link">Add another role</button>
            </div>
        </div>
    </div>
</div>
