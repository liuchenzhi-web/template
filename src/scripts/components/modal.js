var cs_modal = function(fn) {
    this.createDom();
    this.modal = $(".cs-modal")
    this.trigger = $("#cs-trigger-modal")
    this.cancel = $(".cs-dialog-cancel")
    this.sure = $(".cs-dialog-sure")
    this.fn = fn //点击确定之后执行的函数
    this.triggerModal()
    this.addClick()
}
cs_modal.prototype = {
    triggerModal: function() {
        this.trigger.on("click", function() {
            //console.log(this) 这里this指向cs-trigger-modal
            $(".cs-modal").fadeIn(100)
            $(".cs-dialog").animate({
                "margin-top": "130px"
            }, 250)
        })
    },
    addClick: function() {
        var that = this; //保存this 指向cs-modal
        this.cancel.on("click", function() {
            that.modal.fadeOut();
        })
        this.sure.on("click", function() {
            $(".cs-modal").fadeOut()
            that.fn()
        })
    },
    hide: function() {
        this.modal.hide()
    }
}