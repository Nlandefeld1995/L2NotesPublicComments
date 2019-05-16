var database = firebase.database();
var employeeName = (domo.env.userName == undefined) ? "someone?" : domo.env.userName.replace("+", " ");
var employeeEmail = (domo.env.userEmail == undefined) ? "testing@testing.com": domo.env.userEmail.replace("+", " ");
var bucket;


function bucket_change(bucket_assign){
    document.getElementById('Alerts-Mobile').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
    document.getElementById('Card-UI').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
    document.getElementById('Connector').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
    document.getElementById('Dataflow').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
    document.getElementById('DataQuery').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
    document.getElementById('WorkBench').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
    document.getElementById('Other').style.backgroundColor = "rgba(66, 197, 244, 0.0)";



    document.getElementById(bucket_assign).style.backgroundColor = "rgba(66, 197, 244, 0.96)";
    document.getElementById(bucket_assign).style.borderRadius = "7px";
    bucket = bucket_assign; 
}


function submit(){
    var comment = document.getElementById('input').value;
    if(bucket == undefined){
        alert('not today jr');
        no_bucket_error();
    }
    else if(comment.length == 0){
        alert('no message');
        no_comment_error();
    }
    else{
        var date = new Date();
        // comment = comment.replace("||", "\n");
        
        var message = `@all ${bucket}: ${comment}`;
        console.log(message);

        request = $.ajax({
            url: `https://script.google.com/macros/s/{}/exec?msg=${message}`,
                
            error: function(error){
                console.log(error);
            },
            dataType: 'json',
            success: function(data) {
                console.log('success');
            },
            type: "post"
        });/*
        firebase.database().ref(`${bucket}/${date}`).push({
            bucket: bucket,
            l2_name: employeeName,
            l2_email: employeeEmail,
            comment: comment,
            date: date
        });
        */

        request = $.ajax({
            url: "https://script.google.com/macros/s/{}/exec",
            type: "post",
            data: {
                bucket: bucket,
                l2_name: employeeName,
                l2_email: employeeEmail,
                comment: comment,
                date: date
              },
          });


        bucket = undefined;
        document.getElementById('input').value = '';
        document.getElementById('input').placeholder = 'Success';
        document.getElementById('Alerts-Mobile').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
        document.getElementById('Card-UI').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
        document.getElementById('Connector').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
        document.getElementById('Dataflow').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
        document.getElementById('DataQuery').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
        document.getElementById('WorkBench').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
        document.getElementById('Other').style.backgroundColor = "rgba(66, 197, 244, 0.0)";
    }
}
function no_bucket_error(){

}

function no_comment_error(){

}