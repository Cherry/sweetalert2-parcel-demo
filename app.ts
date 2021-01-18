import Swal from 'sweetalert2/src/sweetalert2.js'

import './styles.scss'

Swal.fire({
  title: 'Hello from parcel!',
  html: `SweetAlert2 version ${Swal.version}`,
  icon: 'success'
}).then(() => {
	Swal.fire({
	  title: 'Hello from parcel 2!',
	  html: `SweetAlert2 version ${Swal.version}`,
	  icon: 'warning'
	})
};
