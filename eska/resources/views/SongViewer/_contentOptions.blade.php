<div class="options-panel">
    <button class="btn-action close"><span class="material-icons">clear</span></button>
    <div class="content">
        <div class="header">Options</div>
        <div class="body">
            <div class="section section-view expanded">
                <div class="section-tab">
                    <span class="section-name">View</span>
                    <button class="btn-action fold"><span class="material-icons">expand_less</span></button>
                    <button class="btn-action expand"><span class="material-icons">expand_more</span></button>
                </div>
                <div class="section-content">
                    <input id="optionView" type="hidden" value="performance"/>
                    <div class="option-item group" data-target="#optionView" data-value="performance" data-performance='' data-simple='' data-audience=''>
                        <div class="thumbnail" style="background-image: url('{{ asset('storage/img/songviewer/view_performance.png') }}')"><img src="{{ asset('storage/img/songviewer/view_performance.png') }}"/></div>
                        <span class="text">Performance</span>
                    </div>
                    <div class="option-item group" data-target="#optionView" data-value="audience" data-performance='' data-simple='' data-audience=''>
                        <div class="thumbnail" style="background-image: url('{{ asset('storage/img/songviewer/view_audience.png') }}')"><img src="{{ asset('storage/img/songviewer/view_audience.png') }}"/></div>
                        <span class="text">Audience</span>
                    </div>
                    <div class="option-item group" data-target="#optionView" data-value="simple" data-performance='' data-simple='' data-audience=''>
                        <div class="thumbnail" style="background-image: url('{{ asset('storage/img/songviewer/view_simple.png') }}')"><img src="{{ asset('storage/img/songviewer/view_audience.png') }}"/></div>
                        <span class="text">Simple</span>
                    </div>
                </div>
            </div>
            <div class="section section-font expanded">
                <div class="section-tab">
                    <span class="section-name">Font</span>
                    <button class="btn-action fold"><span class="material-icons">expand_less</span></button>
                    <button class="btn-action expand"><span class="material-icons">expand_more</span></button>
                </div>
                <div class="section-content">
                    <div class="option-item select" data-target="#optionPerformanceFontFamily" data-performance='' data-simple=''>
                        <label for="optionPerformanceFontFamily">Font</label>
                        <select id="optionPerformanceFontFamily">
                            <option value="'Anonymous Pro', 'Consolas', 'Courier New', Courier, monospace">Anonymous Pro</option>
                            <option value="'Consolas', 'Courier New', Courier, monospace">Consolas</option>
                            <option value="'Courier New', Courier, monospace">Courier New</option>
                            <option value="'Nova Mono', 'Courier New', Courier, monospace">Nova Mono</option>
                            <option value="'Space Mono', 'Courier New', Courier, monospace">Space Mono</option>
                        </select>
                    </div>
                    <div class="option-item select" data-target="#optionPerformanceFontSize" data-performance=''>
                        <label for="optionPerformanceFontSize">Size</label>
                        <select id="optionPerformanceFontSize">
                            <option value="18px">18px</option>
                            <option value="20px">20px</option>
                            <option value="22px">22px</option>
                            <option value="24px">24px</option>
                            <option value="26px">26px</option>
                            <option value="28px">28px</option>
                            <option value="30px">30px</option>
                        </select>
                    </div>
                    <input id="optionPerformanceFontStyle" type="hidden" value="" data-performance=''/>
                    <div class="option-item toggle mini" data-target="#optionPerformanceFontStyle">
                        <span class="material-icons">format_bold</span>
                        <span class="text">Bold</span>
                    </div>
                    <div class="option-item select" data-target="#optionAudienceFontFamily" data-audience=''>
                        <label for="optionAudienceFontFamily">Font</label>
                        <select id="optionAudienceFontFamily">
                            <option value="'Amiri', Georgia, 'Times New Roman', Times, serif">Amiri</option>
                            <option value="'Anonymous Pro', 'Consolas', 'Courier New', Courier, monospace">Anonymous Pro</option>
                            <option value="'Anton', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">Anton</option>
                            <option value="'Consolas', 'Courier New', Courier, monospace">Consolas</option>
                            <option value="'Courier New', Courier, monospace">Courier New</option>
                            <option value="'Lobster', Georgia, 'Times New Roman', Times, serif">Lobster</option>
                            <option value="Geneva, Verdana, sans-serif">Geneva</option>
                            <option value="Georgia, 'Times New Roman', Times, serif">Georgia</option>
                            <option value="'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">Montserrat</option>
                            <option value="'Nova Mono', 'Courier New', Courier, monospace">Nova Mono</option>
                            <option value="'Oswald', Arial, Helvetica, sans-serif">Oswald</option>
                            <option value="'Roboto Slab', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">Roboto Slab</option>
                            <option value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">Segoe UI</option>
                            <option value="'Space Mono', 'Courier New', Courier, monospace">Space Mono</option>
                            <option value="'Suez One', Georgia, 'Times New Roman', Times, serif">Suez One</option>
                            <option value="'Sriracha', Geneva, Verdana, sans-serif">Sriracha</option>
                            <option value="Tahoma, Geneva, Verdana, sans-serif">Tahoma</option>
                            <option value="'Times New Roman', Times, serif">Times New Roman</option>
                            <option value="Verdana, sans-serif">Verdana</option>
                        </select>
                    </div>
                    <div class="option-item select" data-target="#optionAudienceFontSize" data-audience=''>
                        <label for="optionAudienceFontSize">Size</label>
                        <select id="optionAudienceFontSize">
                            <option value="26px">26px</option>
                            <option value="28px">28px</option>
                            <option value="30px">30px</option>
                            <option value="32px">32px</option>
                            <option value="34px">34px</option>
                            <option value="36px">36px</option>
                            <option value="38px">38px</option>
                            <option value="40px">40px</option>
                            <option value="42px">42px</option>
                            <option value="44px">44px</option>
                            <option value="46px">46px</option>
                            <option value="48px">48px</option>
                            <option value="50px">50px</option>
                        </select>
                    </div>
                    <input type="hidden" id="optionAudienceAlignment" value="center"/>
                    <div class="option-item group mini ml-2" data-target="#optionAudienceAlignment" data-value="left" data-audience=''>
                        <span class="material-icons">format_align_left</span>
                    </div>
                    <div class="option-item group mini" data-target="#optionAudienceAlignment" data-value="center" data-audience=''>
                        <span class="material-icons">format_align_center</span>
                    </div>
                    <div class="option-item group mini" data-target="#optionAudienceAlignment" data-value="right" data-audience=''>
                        <span class="material-icons">format_align_right</span>
                    </div>
                    <input id="optionAudienceFontColor" type="hidden" value="" />
                    <div class="option-item button mini" data-target="#optionAudienceFontColor" data-audience=''>
                        <label for="optionColorPicker">Color</label>
                        <span id="optionColorPicker"></span>
                    </div>
                    <input id="optionAudienceBackgroundType" type="hidden" value="image" />
                    <div class="option-item group mini" data-target="#optionAudienceBackgroundType" data-value="image" data-audience='' data-toggle='#optionBgImageSelector'>
                        <span class="material-icons">image</span>
                    </div>
                    <div class="option-item group mini" data-target="#optionAudienceBackgroundType" data-value="color" data-audience='' data-toggle="#optionBgColorSelector">
                        <span class="material-icons">palette</span>
                    </div>
                    <input id="optionAudienceBackgroundImage" type="hidden" value="" />
                    <div id="optionBgImageSelector" class="option-item button mini toggleable" data-target="#optionAudienceBackgroundImage" data-audience=''>
                        <label for="optionBgImage">BG Image</label>
                        <span id="optionBgImage"></span>
                    </div>
                    <input id="optionAudienceBackgroundColor" type="hidden" value="" />
                    <div id="optionBgColorSelector" class="option-item button mini toggleable" data-target="#optionAudienceBackgroundColor" data-audience=''>
                        <label for="optionBgColor">BG Color</label>
                        <span id="optionBgColor"></span>
                    </div>
                    <div class="option-item select" data-target="#optionSimpleFontSize" data-simple=''>
                        <label for="optionSimpleFontSize">Size</label>
                        <select id="optionSimpleFontSize">
                            <option value="10px">10px</option>
                            <option value="12px">12px</option>
                            <option value="13px">13px</option>
                            <option value="14px">14px</option>
                            <option value="16px">16px</option>
                            <option value="18px">18px</option>
                            <option value="20px">20px</option>
                            <option value="22px">22px</option>
                            <option value="24px">24px</option>
                            <option value="26px">26px</option>
                            <option value="28px">28px</option>
                            <option value="30px">30px</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
