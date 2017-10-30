function ajax(path,method,datas,async,success){
  $$.ajax({
    url: path,
    type: method,
    dataType: 'json',
    data:JSON.stringify(datas),
    async:async,
    success:success,
    error:function(err){
      console.log(err);
    }
  })
}
