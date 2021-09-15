({
    doInit : function(component,event,helper)
    {
        var action = component.get("c.getAcc");
        action.setCallback(this,function(response)
                           {
                               var res = response.getReturnValue();
                               component.set("v.accList",res);
                           });
        $A.enqueueAction(action);
    },
    handleEdit : function(component,event,helper)
    {
        component.set("v.bool",true);
        var eventSource = event.getSource();
        var i = eventSource.get("v.name");
         component.set("v.ids",i);
       
    },
    closeModel : function(component,event,helper)
    {
        component.set("v.bool",false);
    },
   
  
})
