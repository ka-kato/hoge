/**
 *
 */

$('#js-btn-add').click(goAdd)

function goAdd(){
	location.href ='./EditExpense.html'
}

function createTable(){
	var headerRow = '<tr><th>申請ID</th><th>登録日</th><th>編集日</th><th>登録日</th><th>申請者</th><th>タイトル</th><th>金額</th><th>状態</th></tr>';

	$('#employees').children().remove();

	if (data.length === 0) {
		$('#employees').append('<p>現在データが存在していません。</p>')
	} else {
		var table = $('<table>').attr('border', 1);
		table.append(headerRow);

		$.each(data, function(index, employee) {
			var row = $('<tr>');
			row.append($('<td>').text(employee.empId));
			row.append($('<td>').text(employee.name));
			row.append($('<td>').append(
					$('<button>').text("編集").attr("type","button").attr("onclick", "findById("+employee.id+')')
				));
			row.append($('<td>').append(
					$('<button>').text("削除").attr("type","button").attr("onclick", "deleteById("+employee.id+')')
				));
			table.append(row);
		});

		$('#employees').append(table);
}
createTable()

$('#js-btn-back').click(back)


}