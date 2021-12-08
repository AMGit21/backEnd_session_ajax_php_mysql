$(document).ready(function() {

    $('#add_subject').click(function(e) {
        e.preventDefault();
        var sub_name = $("#sub_name").val();
        var semester = $("#semester").val();
        // console.log(sub_name + " " + semester);

        $.ajax({
            type: "POST",
            url: "../php/add_subject_handler.php",
            dataType: "json",
            data: { sub_name: sub_name, semester: semester },
            success: function(received_data) {
                console.log(received_data);
                for (let i in received_data)
                    alert(i + " " + received_data[i]);
                // received_data.forEach(element => {
                //     alert(element);
                // });
                if (received_data["name"] == "php") {
                    alert("Semester is : " + received_data["sem"]);

                } else {
                    // $(".display-error").html("<ul>" + received_data[0] + "</ul>");
                    // $(".display-error").css("display", "block");
                }
            },
            error: function(request, status, error) {
                console.log(error);
            }
        });
    });
});