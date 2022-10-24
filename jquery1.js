//Add the row in a table
 var i = 0;
function addData() {

    //  editDataTable= "i_" + i++;
    i = i+1;

    var ID = $("#ID").val().trim();
    var ITEM = $("#ITEM").val().trim();
    var date = $("#date").val();
    var category = $("#category").val();

    if ((ID != "") && (ITEM != "") && (date != "") && (category != "")) {
            console.log(ID);
            console.log(ITEM);

        $("#list").append(`
				<tr id="editDataTable${i}">
					<td>${ID}</td>
					<td>${ITEM}</td>
					<td>${date}</td>
					<td>${category}</td>
					<td>
						<button class = "ed" id = "es">Edit</button>
						<button class = "er" id = "et" ">Delete</button>
					</td>
				</tr>`);

                resetform();

    }
    else {

        validation('ID', 'error', 'ID:');
        validation('ITEM', 'iError', 'ITEM NAME:');
        validation('date', 'dError', 'DATE:');
        validation('category', 'sError', 'CATEGORY:');


    }
}




//editRaw

$('#list').on("click", "#es", function () {
    editData = $(this).closest("tr");
    // console.log(editData);
    editRow = editData.attr("id");
    // console.log(editRow);

    $("#hide").val(editData);
    $("#ID").val(editData.find('td:eq(0)').text());
    $("#ITEM").val(editData.find('td:eq(1)').text());
    $("#date").val(editData.find('td:eq(2)').text());
    $("#category").val(editData.find('td:eq(3)').text());


    $("#error").text("");
    $("#iError").text("");
    $("#dError").text("");
    $("#sError").text("");

    $("#update").html("update")
    $("#update").attr("onclick", "updateData("+editRow+")");
});







//Update data
function updateData() {


    var ID = $("#ID").val().trim();
    var ITEM = $("#ITEM").val().trim();
    var date = $("#date").val();
    var category = $("#category").val();


     raw = editData;
     let raw1 = $(editData).find("td");
    if ((ID != "") && (ITEM != "") && (date != "") && (category != "")) {


        $(raw1).eq(0).text(ID);
        $(raw1).eq(1).text(ITEM);
        $(raw1).eq(2).text(date);
        $(raw1).eq(3).text(category);
		
		$("#update").html("update")
		$("#update").attr("onclick", "addData("+editRow+")");
        resetform();
    }
    else {
        validation('ID', 'error', 'ID:');
        validation('ITEM', 'iError', 'ITEM NAME:');
        validation('date', 'dError', 'DATE:');
        validation('category', 'sError', 'CATEGORY:');
    }
}





//Delete data


$("#list").on("click", "#et", function () {

    if (confirm("Are you sure to delete the data?")) {
        var deleteData = $(this).closest("tr");
        let raw1 = deleteData.attr("id")
        deleteData.remove();
        if (raw1 == editRow) {
            resetform();
        }
    }

});


//validation
function validation(elementId, errorId, fieldName) {

    let valid = $(`#${elementId}`).val().trim();

    if (valid == "") {
        $(`#${errorId}`).text("*" + fieldName + " Must be Fild Out");
    } else {
        $(`#${errorId}`).text("");
    }
}



//reset Data

function resetform() {

    $("#ID").val("");
    $("#ITEM").val("");
    $("#date").val("");
    $("#category").val("");


    $("#error").text("");
    $("#iError").text("");
    $("#dError").text("");
    $("#sError").text("");


	$("#update").html("submit")
	$("#update").attr("onclick", "addData()");
}