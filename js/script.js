document.addEventListener('DOMContentLoaded', () => {
	// Functions to open and close a modal
	function openModal($el) {
		$el.classList.add('is-active');
	}

	function closeModal($el) {
		$el.classList.remove('is-active');
	}

	function closeAllModals() {
		(document.querySelectorAll('.modal') || []).forEach(($modal) => {
			closeModal($modal);
		});
	}

	// Add a click event on buttons to open a specific modal
	(document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
		const modal = $trigger.dataset.target;
		const $target = document.getElementById(modal);

		$trigger.addEventListener('click', () => {
			openModal($target);
		});
	});

	// Add a click event on various child elements to close the parent modal
	(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
		const $target = $close.closest('.modal');

		$close.addEventListener('click', () => {
			closeModal($target);
		});
	});

	// Add a keyboard event to close all modals
	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape') {
			closeAllModals();
		}
	});

});

document.addEventListener('DOMContentLoaded', () => {
	const fileInput = document.querySelector('#fileInputField input[type=file]');
	fileInput.onchange = () => {
		if (fileInput.files.length > 0) {
			const fileName = document.querySelector('#fileInputField .file-name');
			fileName.textContent = fileInput.files[0].name;
		}
	}
});

document.addEventListener('DOMContentLoaded', function () {
	var cropper;

	function initializeCropper() {
		var image = document.getElementById('cropperImage');
		var input = document.getElementById('fileInput');
		var reader = new FileReader();

		reader.onload = function (e) {
			image.src = e.target.result;
			cropper = new Cropper(image, {
				aspectRatio: 1,
				viewMode: 1,
				autoCropArea: 1,
			});
		}

		reader.readAsDataURL(input.files[0]);
	}

	function destroyCropper() {
		if (cropper) {
			cropper.destroy();
			cropper = null;
		}
	}

	// Open Modal
	$('#openModal').on('click', function () {
		$('#cropperModal').addClass('is-active');
		initializeCropper();
	});

	// Crop Image
	$('#cropButton').on('click', function () {
		try {
			var canvas = cropper.getCroppedCanvas({ width: 200, height: 200});
			var croppedImage = canvas.toDataURL(); // Use this for further processing

			$('#cropped').attr("src",croppedImage);
			$('#cropped').css({
				'border-radius': '50%'
			  });

			$('#cropperModal').removeClass('is-active');
			destroyCropper();
		} catch (error) {
			alert('Error cropping image');
		}
	});

	// Cancel Crop
	$('#cancelButton').on('click', function () {
		$('#cropperModal').removeClass('is-active');
		destroyCropper();
	});
});

function convert(){
	try{
		
	}catch(error){

	}
}