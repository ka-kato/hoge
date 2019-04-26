

function back(){

}

function addEmployee() {
	console.log('addEmployee start');

	var fd = new FormData(document.getElementById("employeeForm"));

	$.ajax({
		url : rootUrl,
		type : "POST",
		data : fd,
		contentType : false,
		processData : false,
		dataType : "json",
		success : function(data, textStatus, jqXHR) {
			alert('社員データの追加に成功しました');
			findAll();
			renderDetails(data);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('社員データの追加に失敗しました');
		}
	})
}

function updateEmployee(id) {
	console.log('updateEmployee start');

	var fd = new FormData(document.getElementById("employeeForm"));

	$.ajax({
		url : rootUrl + '/' + id,
		type : "PUT",
		data : fd,
		contentType : false,
		processData : false,
		dataType : "json",
		success : function(data, textStatus, jqXHR) {
			alert('社員データの更新に成功しました');
			findAll();
			renderDetails(data);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('社員データの更新に失敗しました');
		}
	})
}

function renderDetails(employee) {
	$('.error').text('');
	$('#id').val(employee.id);
	$('#empId').val(employee.empId);
	$('#name').val(employee.name);
	$('#age').val(employee.age);
	$('input[name="gender"]').val([ employee.gender ]);

	$('#currentPhoto').children().remove();
	$('#photoId').val(employee.photoId);
	if (employee.photoId != null && employee.photoId != 0) {
		// 末尾のDate.now()はキャッシュ対策
		var currentPhoto = $('<img>').attr('src',
				getPhotoUrl + '/' + employee.photoId + '?' + Date.now());
		$('#currentPhoto').append(currentPhoto)
	}
	$('#zip').val(employee.zip);
	$('#pref').val(employee.pref);
	$('#address').val(employee.address);
	if (employee.post != null) {
		$('#postId').val(employee.post.id);
	}
	$('#enterDate').val(employee.enterDate);
	$('#retireDate').val(employee.retireDate);
}