(function executeRule(current, previous /*null when async*/) {
gs.log('ISHub - Integration - Test1');
	var incnum = current.number;
	var incassign = current.assignment_group;
	var incprio = current.priority;
	var incstate = current.state;
gs.log('ISHub - Integration - Test1 ' + 'number: ' + incnum + ' assigned_group: ' +  incassign +  ' Priority: ' + incprio + ' state: ' + incstate);
	
	try {
	var r = new sn_ws.RESTMessageV2('ISHub - Integration', 'PostDetails');

	var obj = {
        "assignment_group": current.assignment_group.name.toString(),
		"number": current.number.toString(),
		"priority": current.priority.toString(),
		"state": current.state.toString(),
		"alert_Id" : 'Alert0678817',
		"correlation_id" : 'test'
    };
	
		var con = JSON.stringify(obj);
		r.setRequestBody(con);
        var response = r.execute();
        var responseBody = response.getBody();
        var httpStatus = response.getStatusCode();

    } catch (ex) {
        var message = ex.message;
		gs.log("ISHub - Integration responseBody " + responseBody);
		gs.log("ISHub - Integration httpStatus " + httpStatus);
		gs.log("ISHub - Integration message " + message);
    }
	gs.log('ISHub - Integration - Sample: ' + con + ' sample 2: ' + responseBody + 'sample 3: ' + responseBody + ' test: 4 ' + httpStatus);
})(current, previous);