$( ".customSwitch1" ).click(function() {
	if($(this).prop("checked") == true){
            var id = $(this).attr("id");
            status = 1;
        }
        else if($(this).prop("checked") == false){
            var id = $(this).attr("id");
            status = 0;
        }
   $.ajax({
    	headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/update-manager-status',
        data: {
        id: id,
        status: status
    },
       success:function(data) {
          console.log(data.success);
          if(data.success){
            $('#show_response').css('display', 'block');
            $("#show_response").html(data.success);
            window.setInterval('refresh()', 5000);
          }

       }
    });
});
$( ".customDeo1" ).click(function() {
  if($(this).prop("checked") == true){
            var id = $(this).attr("id");
            status = 1;
        }
        else if($(this).prop("checked") == false){
            var id = $(this).attr("id");
            status = 0;
        }
   $.ajax({
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/update-deo-status',
        data: {
        id: id,
        status: status
    },
       success:function(data) {
          console.log(data.success);
          if(data.success){
            $('#show_response').css('display', 'block');
            $("#show_response").html(data.success);
            window.setInterval('refresh()', 5000);
          }

       }
    });
});

$( ".customClient1" ).click(function() {
  if($(this).prop("checked") == true){
            var id = $(this).attr("id");
            status = 1;
        }
        else if($(this).prop("checked") == false){
            var id = $(this).attr("id");
            status = 0;
        }
   $.ajax({
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/update-client-status',
        data: {
        id: id,
        status: status
    },
       success:function(data) {
          console.log(data.success);
          if(data.success){
            $('#show_response').css('display', 'block');
            $("#show_response").html(data.success);
            window.setInterval('refresh()', 5000);
          }

       }
    });
});
$( ".adminSwitch1" ).click(function() {
  if($(this).prop("checked") == true){
            var id = $(this).attr("id");
            status = 1;
        }
        else if($(this).prop("checked") == false){
            var id = $(this).attr("id");
            status = 0;
        }
   $.ajax({
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/update-admin-status',
        data: {
        id: id,
        status: status
    },
       success:function(data) {
          console.log(data.success);
          if(data.success){
            $('#show_response').css('display', 'block');
            $("#show_response").html(data.success);
            window.setInterval('refresh()', 5000);
          }

       }
    });
});
$( ".managerDeoStatus" ).click(function() {
  if($(this).prop("checked") == true){
            var id = $(this).attr("id");
            status = 1;
        }
        else if($(this).prop("checked") == false){
            var id = $(this).attr("id");
            status = 0;
        }
   $.ajax({
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/update-manager-deo-status',
        data: {
        id: id,
        status: status
    },
       success:function(data) {
          console.log(data.success);
          if(data.success){
            $('#show_response').css('display', 'block');
            $("#show_response").html(data.success);
            window.setInterval('refresh()', 5000);
          }

       }
    });
});
$( ".managerClientStatus" ).click(function() {
  if($(this).prop("checked") == true){
            var id = $(this).attr("id");
            status = 1;
        }
        else if($(this).prop("checked") == false){
            var id = $(this).attr("id");
            status = 0;
        }
   $.ajax({
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/update-manager-client-status',
        data: {
        id: id,
        status: status
    },
       success:function(data) {
          console.log(data.success);
          if(data.success){
            $('#show_response').css('display', 'block');
            $("#show_response").html(data.success);
            window.setInterval('refresh()', 5000);
          }

       }
    });
});
    function deleteAdminConfirmation(id) {
        swal.fire({
            title: "Delete?",
            icon: 'question',
            text: "Please ensure and then confirm!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: !0
        }).then(function (e) {

            if (e.value === true) {
                $.ajax({
                  headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    type: 'POST',
                    url: '/delete-admin',
                    data: { id: id},
                    success: function (resp) {
                        if (resp.success) {
                            swal.fire("Done!", resp.message, "success");
                            window.setInterval('location.reload()', 5000);
                        } else {
                            swal.fire("Error!", 'Sumething went wrong.', "error");
                        }
                    },
                    error: function (resp) {
                        swal.fire("Error!", 'Sumething went wrong.', "error");
                    }
                });

            } else {
                e.dismiss;
            }

        }, function (dismiss) {
            return false;
        })
    }
     function deleteManagerConfirmation(id) {
        swal.fire({
            title: "Delete?",
            icon: 'question',
            text: "Please ensure and then confirm!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: !0
        }).then(function (e) {

            if (e.value === true) {
                $.ajax({
                  headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    type: 'POST',
                    url: '/delete-admin-manager',
                    data: { id: id},
                    success: function (resp) {
                        if (resp.success) {
                            swal.fire("Done!", resp.message, "success");
                            window.setInterval('location.reload()', 5000);
                        } else {
                            swal.fire("Error!", 'Sumething went wrong.', "error");
                        }
                    },
                    error: function (resp) {
                        swal.fire("Error!", 'Sumething went wrong.', "error");
                    }
                });

            } else {
                e.dismiss;
            }

        }, function (dismiss) {
            return false;
        })
    }
      function deleteDeoConfirmation(id) {
        swal.fire({
            title: "Delete?",
            icon: 'question',
            text: "Please ensure and then confirm!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: !0
        }).then(function (e) {

            if (e.value === true) {
                $.ajax({
                  headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    type: 'POST',
                    url: '/delete-admin-deo',
                    data: { id: id},
                    success: function (resp) {
                        if (resp.success) {
                            swal.fire("Done!", resp.message, "success");
                            window.setInterval('location.reload()', 5000);
                        } else {
                            swal.fire("Error!", 'Sumething went wrong.', "error");
                        }
                    },
                    error: function (resp) {
                        swal.fire("Error!", 'Sumething went wrong.', "error");
                    }
                });

            } else {
                e.dismiss;
            }

        }, function (dismiss) {
            return false;
        })
    }
     function deleteClientConfirmation(id) {
        swal.fire({
            title: "Delete?",
            icon: 'question',
            text: "Please ensure and then confirm!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: !0
        }).then(function (e) {

            if (e.value === true) {
                $.ajax({
                  headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    type: 'POST',
                    url: '/delete-admin-client',
                    data: { id: id},
                    success: function (resp) {
                        if (resp.success) {
                            swal.fire("Done!", resp.message, "success");
                            window.setInterval('location.reload()', 5000);
                        } else {
                            swal.fire("Error!", 'Sumething went wrong.', "error");
                        }
                    },
                    error: function (resp) {
                        swal.fire("Error!", 'Sumething went wrong.', "error");
                    }
                });

            } else {
                e.dismiss;
            }

        }, function (dismiss) {
            return false;
        })
    }
    function deleteManagerDeo(id) {

        swal.fire({
            title: "Delete?",
            icon: 'question',
            text: "Please ensure and then confirm!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: !0
        }).then(function (e) {

            if (e.value === true) {
                $.ajax({
                  headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    type: 'POST',
                    url: '/delete-manager-deo',
                    data: { id: id},
                    success: function (resp) {
                        if (resp.success) {
                            swal.fire("Done!", resp.message, "success");
                            window.setInterval('location.reload()', 5000);
                        } else {
                            swal.fire("Error!", 'Sumething went wrong.', "error");
                        }
                    },
                    error: function (resp) {
                        swal.fire("Error!", 'Sumething went wrong.', "error");
                    }
                });

            } else {
                e.dismiss;
            }

        }, function (dismiss) {
            return false;
        })
    }
      function deleteManagerClient(id) {
        swal.fire({
            title: "Delete?",
            icon: 'question',
            text: "Please ensure and then confirm!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: !0
        }).then(function (e) {

            if (e.value === true) {
                $.ajax({
                  headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    type: 'POST',
                    url: '/delete-manager-client',
                    data: { id: id},
                    success: function (resp) {
                        if (resp.success) {
                            swal.fire("Done!", resp.message, "success");
                            window.setInterval('location.reload()', 5000);
                        } else {
                            swal.fire("Error!", 'Sumething went wrong.', "error");
                        }
                    },
                    error: function (resp) {
                        swal.fire("Error!", 'Sumething went wrong.', "error");
                    }
                });

            } else {
                e.dismiss;
            }

        }, function (dismiss) {
            return false;
        })
    }
    $( ".customAsset1" ).click(function() {
  if($(this).prop("checked") == true){
            var id = $(this).attr("id");
            status = 1;
        }
        else if($(this).prop("checked") == false){
            var id = $(this).attr("id");
            status = 0;
        }
   $.ajax({
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/update-admin-assets-status',
        data: {
        id: id,
        status: status
    },
       success:function(data) {
          console.log(data.success);
          if(data.success){
            $('#show_response').css('display', 'block');
            $("#show_response").html(data.success);
            window.setInterval('refresh()', 5000);
          }

       }
    });
});
        $( ".customAsset1Manager" ).click(function() {
  if($(this).prop("checked") == true){
            var id = $(this).attr("id");
            status = 1;
        }
        else if($(this).prop("checked") == false){
            var id = $(this).attr("id");
            status = 0;
        }
   $.ajax({
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/update-manager-assets-status',
        data: {
        id: id,
        status: status
    },
       success:function(data) {
          console.log(data.success);
          if(data.success){
            $('#show_response').css('display', 'block');
            $("#show_response").html(data.success);
            window.setInterval('refresh()', 5000);
          }

       }
    });
});
      function deleteAssetConfirmation(id) {
        swal.fire({
            title: "Delete?",
            icon: 'question',
            text: "Please ensure and then confirm!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: !0
        }).then(function (e) {

            if (e.value === true) {
                $.ajax({
                  headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    type: 'POST',
                    url: '/delete-admin-client-asset',
                    data: { id: id},
                    success: function (resp) {
                        if (resp.success) {
                            swal.fire("Done!", resp.message, "success");
                            window.setInterval('location.reload()', 5000);
                        } else {
                            swal.fire("Error!", 'Sumething went wrong.', "error");
                        }
                    },
                    error: function (resp) {
                        swal.fire("Error!", 'Sumething went wrong.', "error");
                    }
                });

            } else {
                e.dismiss;
            }

        }, function (dismiss) {
            return false;
        })
    }
      function deleteAssetConfirmationByManager(id) {
        swal.fire({
            title: "Delete?",
            icon: 'question',
            text: "Please ensure and then confirm!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: !0
        }).then(function (e) {

            if (e.value === true) {
                $.ajax({
                  headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    type: 'POST',
                    url: '/delete-manager-client-asset',
                    data: { id: id},
                    success: function (resp) {
                        if (resp.success) {
                            swal.fire("Done!", resp.message, "success");
                            window.setInterval('location.reload()', 5000);
                        } else {
                            swal.fire("Error!", 'Sumething went wrong.', "error");
                        }
                    },
                    error: function (resp) {
                        swal.fire("Error!", 'Sumething went wrong.', "error");
                    }
                });

            } else {
                e.dismiss;
            }

        }, function (dismiss) {
            return false;
        })
    }
    $( ".changeAuditorStatus" ).click(function() {
    if($(this).prop("checked") == true){
            var id = $(this).attr("id");
            status = 1;
        }
        else if($(this).prop("checked") == false){
            var id = $(this).attr("id");
            status = 0;
        }
   $.ajax({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/update-auditor-status',
        data: {
        id: id,
        status: status
    },
       success:function(data) {
          console.log(data.success);
          if(data.success){
            $('#show_response').css('display', 'block');
            $("#show_response").html(data.success);
            window.setInterval('refresh()', 5000);
          }

       }
    });
});
    function deleteAuditrConfirmation(id) {
        swal.fire({
            title: "Delete?",
            icon: 'question',
            text: "Please ensure and then confirm!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: !0
        }).then(function (e) {

            if (e.value === true) {
                $.ajax({
                  headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    type: 'POST',
                    url: '/delete-admin-auditor',
                    data: { id: id},
                    success: function (resp) {
                        if (resp.success) {
                            swal.fire("Done!", resp.message, "success");
                            window.setInterval('location.reload()', 5000);
                        } else {
                            swal.fire("Error!", 'Sumething went wrong.', "error");
                        }
                    },
                    error: function (resp) {
                        swal.fire("Error!", 'Sumething went wrong.', "error");
                    }
                });

            } else {
                e.dismiss;
            }

        }, function (dismiss) {
            return false;
        })
    }

    function deleteManagerAuditrConfirmation(id) {
        swal.fire({
            title: "Delete?",
            icon: 'question',
            text: "Please ensure and then confirm!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: !0
        }).then(function (e) {

            if (e.value === true) {
                $.ajax({
                  headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    type: 'POST',
                    url: '/delete-manager-auditor',
                    data: { id: id},
                    success: function (resp) {
                        if (resp.success) {
                            swal.fire("Done!", resp.message, "success");
                            window.setInterval('location.reload()', 5000);
                        } else {
                            swal.fire("Error!", 'Sumething went wrong.', "error");
                        }
                    },
                    error: function (resp) {
                        swal.fire("Error!", 'Sumething went wrong.', "error");
                    }
                });

            } else {
                e.dismiss;
            }

        }, function (dismiss) {
            return false;
        })
    }

    $( ".changeManagerAuditorStatus" ).click(function() {
    if($(this).prop("checked") == true){
            var id = $(this).attr("id");
            status = 1;
        }
        else if($(this).prop("checked") == false){
            var id = $(this).attr("id");
            status = 0;
        }

});
//................ For Admin simple function for adding transaction...............

function FetchClientAssets(event) {
    var clientID= this.options[this.selectedIndex].value;
    $.ajax({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/admin-fetch-assets-by-client-id',
        data: {
        id: clientID
    },
       success:function(response) {
        obj1 = JSON.parse(response);
        if(obj1.success == 1)
        {
            console.log(obj1.client_assets);
            var assetsData = obj1.client_assets;
            var assetsHtml = '';
            $('#clientAssets').html();
                for (var i = 0; i < assetsData.length; i++) {
                    assetsHtml+='<option value="'+assetsData[i].client_assets_id+'">'+assetsData[i].asset_name+'</option>';
                }
            $("#clientAssets").html(assetsHtml);
        }

       }
    });
}

//................ For Manager simple function for adding transaction...............

function FetchClientAssetsForManager(event) {
    var clientID= this.options[this.selectedIndex].value;
    $.ajax({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/manager-fetch-assets-by-client-id',
        data: {
        id: clientID
    },
       success:function(response) {
        obj1 = JSON.parse(response);
        if(obj1.success == 1)
        {
            console.log(obj1.client_assets);
            var assetsData = obj1.client_assets;
            var assetsHtml = '';
            $('#clientAssets').html();
                for (var i = 0; i < assetsData.length; i++) {
                    assetsHtml+='<option value="'+assetsData[i].client_assets_id+'">'+assetsData[i].asset_name+'</option>';
                }
            $("#clientAssets").html(assetsHtml);
        }

       }
    });
}
//------------------------------Date Picker Filters On Client Page------------------------------------------------

$(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange input').val(start.format('MM/D/YYYY') + ' - ' + end.format('MM/D/YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});

// admin Setting
$( ".adminClientLogin" ).click(function() {
    if($(this).prop("checked") == true){
            var id = $(this).attr("id");
            status = 1;
        }
        else if($(this).prop("checked") == false){
            var id = $(this).attr("id");
            status = 0;
        }
   $.ajax({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/admin-client-login',
        data: {
        id: id,
        status: status
    },
       success:function(response) {
          console.log(response);
        obj1 = JSON.parse(response);
          if(obj1.success == 1){
            $('.show_response').css('display', 'block');
            $(".show_response").html(obj1.message);
            window.setInterval('refresh()', 5000);
          }

       }
    });
});
// manager Setting
$( ".managerClientLogin" ).click(function() {
    if($(this).prop("checked") == true){
            var id = $(this).attr("id");
            status = 1;
        }
        else if($(this).prop("checked") == false){
            var id = $(this).attr("id");
            status = 0;
        }
   $.ajax({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/manager-client-login',
        data: {
        id: id,
        status: status
    },
       success:function(response) {
          console.log(response);
        obj1 = JSON.parse(response);
          if(obj1.success == 1){
            $('.show_response').css('display', 'block');
            $(".show_response").html(obj1.message);
            window.setInterval('refresh()', 5000);
          }

       }
    });
});
//................ For Deo simple function for adding transaction...............

function FetchClientAssetsByDeo(event) {
    var clientID= this.options[this.selectedIndex].value;
    $.ajax({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type:'POST',
        url:'/deo-fetch-assets-by-client-id',
        data: {
        id: clientID
    },
       success:function(response) {
        obj1 = JSON.parse(response);
        if(obj1.success == 1)
        {
            console.log(obj1.client_assets);
            var assetsData = obj1.client_assets;
            var assetsHtml = '';
            $('#clientAssets').html();
            assetsHtml+='<option>Select Client</option>';
                for (var i = 0; i < assetsData.length; i++) {
                    assetsHtml+='<option value="'+assetsData[i].client_assets_id+'">'+assetsData[i].asset_name+'</option>';
                }
            $("#clientAssets").html(assetsHtml);
        }

       }
    });

}
