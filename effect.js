$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$(document).ready(function(){
	$('.song').hide();
	$('.song1').hide();
	$('.decoration').hide();
	$('.message-item').hide();
	$('.step-button').hide();
	$(window).resize(function(){
		var vw;
		$(window).resize(function(){
			vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});
	})

	$('#turn-on').click(function(){
		$('body').addClass('turn-on');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('.decoration').delay(1000).fadeIn('slow');
			$('#start').delay(2000).fadeIn('slow');
		});
	})

	$('#start').click(function(){
		var song = $('.song')[0];
		song.play();
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#message').fadeIn('slow');
		});
	});

	$('#clue-button').click(function(){
		$('#petunjuk').fadeOut('slow');
		$(this).fadeOut('slow').delay(2000).promise().done(function(){
			$('.decoration').fadeOut('slow').delay(1000).promise().done(function(){
				$('#pertama-0').fadeIn('slow');
				$('#pertama-0').delay(2000).fadeOut('slow').promise().done(function(){
					$('#pertama-1').fadeIn('slow');
					$('#pertama-1').delay(2000).fadeOut('slow').promise().done(function(){
						$('#pertama-2').fadeIn('slow');
						$('#pertama-2').delay(1000).fadeOut('slow').promise().done(function(){
							$('#pertama-3').fadeIn('slow');
							$('#pertama-3').delay(1000).fadeOut('slow').promise().done(function(){
								$('#paper-roll').fadeIn('slow');
								$('#lanjut1').delay(20000).fadeIn('slow');
							});
						});
					});
				});
			});
		})
	})

	$('#lanjut1').click(function(){
		$(this).fadeOut('slow');
		$('#paper-roll').delay(1000).fadeOut('slow').promise().done(function(){
			$('#kedua-0').fadeIn('slow');
			$('#kedua-0').delay(1000).fadeOut('slow').promise().done(function(){
				$('#cake').fadeIn('slow');
				$('#cake').delay(5000).fadeOut('slow').promise().done(function(){
					$('#kedua-1').fadeIn('slow');
					$('#kedua-1').delay(1000).fadeOut('slow').promise().done(function(){
						$('#kedua-2').fadeIn('slow');
						$('#kedua-2').delay(1000).fadeOut('slow').promise().done(function(){
							$('#kedua-3').fadeIn('slow');
							$('#kedua-3').delay(20000).fadeOut('slow').promise().done(function(){
								$('#lanjut2').delay(1000).fadeIn('slow');
								// $('#kedua-').fadeIn('slow');
							});
						});
					});
				})
			});
		})
	})

	$('#lanjut2').click(function(){
		$(this).fadeOut('slow').delay(1000).fadeOut('slow').promise().done(function(){
			$('#ketiga-0').fadeIn('slow');
			$('#ketiga-0').delay(1000).fadeOut('slow').promise().done(function(){
				$('#ketiga-1').fadeIn('slow');
				$('#ketiga-1').delay(1000).fadeOut('slow').promise().done(function(){
					$('#ketiga-2').fadeIn('slow');
					$('#ketiga-2').delay(2000).fadeOut('slow').promise().done(function(){
						$('#ketiga-3').fadeIn('slow');
						$('#ketiga-3').delay(3000).fadeOut('slow').promise().done(function(){
							$('#ketiga-4').fadeIn('slow');
							$('#btn-play').delay(3000).fadeIn('slow');
						})
					})
				})
			})
		})
	})

	$('#btn-play').click(function(){
		var hbd = $('.song1')[0];
		var song = $('.song')[0];
		song.pause();
		hbd.play();
	})

	$('#message').click(function(){
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#hai').fadeIn('slow');
			$('#hai').delay(1000).fadeOut('slow').promise().done(function(){
				$('#nama').fadeIn('slow');
				$('#nama').delay(1000).fadeOut('slow').promise().done(function(){
					$('#selamat').fadeIn('slow');
					$('#selamat').delay(1000).fadeOut('slow').promise().done(function(){
						$('#panjang-umur').fadeIn('slow');
						$('#panjang-umur').delay(1000).fadeOut('slow').promise().done(function(){
							$('#dan').fadeIn('slow');
							$('#dan').delay(1000).fadeOut('slow').promise().done(function(){
								$('#sehat').fadeIn('slow');
								$('#sehat').delay(2000).fadeOut('slow').promise().done(function(){
									$('#sekarang').fadeIn('slow');
									$('#sekarang').delay(1000).fadeOut('slow').promise().done(function(){
										$('#tapi').fadeIn('slow');
										$('#tapi').delay(1000).fadeOut('slow').promise().done(function(){
											$('#akan').fadeIn('slow');
											$('#akan').delay(1000).fadeOut('slow').promise().done(function(){
												$('#mengikuti').fadeIn('slow');
												$('#mengikuti').delay(1000).fadeOut('slow').promise().done(function(){
													$('#petunjuk').fadeIn('slow');
													$('#clue-button').delay(2000).fadeIn('slow');
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
		});


})
