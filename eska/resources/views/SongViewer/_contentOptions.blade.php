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
                    <div class="option-item group" data-target="#optionView" data-value="performance">
                        <div class="thumbnail" style="background-image: url('{{ asset('storage/img/songviewer/view_performance.png') }}')"><img src="{{ asset('storage/img/songviewer/view_performance.png') }}"/></div>
                        <span class="text">Performance</span>
                    </div>
                    <div class="option-item group" data-target="#optionView" data-value="audience">
                        <div class="thumbnail" style="background-image: url('{{ asset('storage/img/songviewer/view_audience.png') }}')"><img src="{{ asset('storage/img/songviewer/view_audience.png') }}"/></div>
                        <span class="text">Audience</span>
                    </div>
                    <div class="option-item group" data-target="#optionView" data-value="simple">
                        <div class="thumbnail" style="background-image: url('{{ asset('storage/img/songviewer/view_simple.png') }}')"><img src="{{ asset('storage/img/songviewer/view_audience.png') }}"/></div>
                        <span class="text">Simple</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
