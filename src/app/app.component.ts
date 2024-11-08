import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule , FormGroup, FormBuilder, Validators,FormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,NgFor,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  images = [
    {
      src: '/assets/imagenes/UNDERGOLD-logo.png',
      hoverSrc: '/assets/imagenes/UNDERGOLD-prom.png',
      text: `LUMINESCENCE
      es una colección que retoma el ADN de Undergold, con estampados gráficos en t-shirts y hoodies que presentan una dualidad entre lo celestial y lo futurista. Además de incorporar colores vibrantes que hacen match con la temporada, traemos nuevas prendas oversized con lavados acid wash para hombre y mujer, combinando con la amplia variedad de inferiores que acompañan esta colección.`,
      alt: 'Primera imagen'
    },
    {
      src: '/assets/imagenes/WEEDGREEN logo.png',
      hoverSrc: '/assets/imagenes/WEEDGREEN prom.png',
      text: 'Nuestra tienda en la Zona T es un reflejo de lo que WeedGreen representa: innovación, estilo y conciencia. La decoración moderna y elegante crea un ambiente acogedor que invita a los visitantes a explorar y disfrutar de una experiencia de compra única.',
      alt: 'Segunda imagen'
    },
    {
      src: '/assets/imagenes/CROWNCODE logo.png',
      hoverSrc: '/assets/imagenes/CROWNCODE prom.png',
      text: '"CROWNCODE va más allá de tan solo una marca de ropa, nuestro objetivo es inspirar a los jóvenes con nuestras prendas a que luchen por todos esos sueños que realmente les apasiona y sentirse seguros de sí mismos."',
      alt: 'Tercera imagen'
    }
  ];
  
  tiendas = [
    {
      nombre: 'Weedgreen',
      imagen: '/assets/imagenes/WEEDGREEN.jpg',
      titulo: 'Main Title',
      descripcion: 'Access the list (Topic)',
      username: 'Username-id',
      info: 'La principal motivación de WeedGreen es interpretar y crear cultura...',
      url: 'https://weedgreen.com'
    },
    {
      nombre: 'UNDERGOLD',
      imagen: '/assets/imagenes/UNDERGOLD.jpg',
      titulo: 'Otro Título Principal',
      descripcion: 'Acceder a otra lista',
      username: 'Username-id',
      info: 'UNDERGOLD es una marca de ropa latinoamericana fundada en el 2016...',
      url: 'https://undergoldapparel.com/'
    },
    {
      nombre: 'CROWNCODE',
      imagen: '/assets/imagenes/CROWNCODE.jpg',
      titulo: 'Otro Título Principal',
      descripcion: 'Acceder a otra lista',
      username: 'Username-id',
      info: 'CROWNCODE una marca de ropa streetwear de lujo...',
      url: 'https://crowncode.co/'
    },
    {
      nombre: 'ARKAD Clothing',
      imagen: '/assets/imagenes/ARKAD.png',
      titulo: 'Otro Título Principal',
      descripcion: 'Acceder a otra lista',
      username: 'Username-id',
      info: 'No hay informacion sobre la marca',
      url: 'https://www.arkadclothing.com/?srsltid=AfmBOoqoLrBdiwQURtbmS59l0eU4klFByHLwSedS176JelhkYvmGWL_p'
    },
    {
      nombre: 'Ampel strada',
      imagen: '/assets/imagenes/Ampelstrada.png',
      titulo: 'Otro Título Principal',
      descripcion: 'Acceder a otra lista',
      username: 'Username-id',
      info: 'Somos una tienda virtual vanguardista enfocada en el minimalismo...',
      url: 'https://ampelstrada.com/'
    },
    {
      nombre: 'MONASTERY',
      imagen: '/assets/imagenes/MONASTERY.png',
      titulo: 'Otro Título Principal',
      descripcion: 'Acceder a otra lista',
      username: 'Username-id',
      info: 'Monastery nació en el 2019 en Colombia...',
      url: 'https://monasterycouture.com.co/?srsltid=AfmBOoqbma3SFF37TItv4BLZJtp82pCC_C8j_z4IYa9NE5ggVUqcWb32'
    }
  ];

  redesSociales = [
    {
      nombre: 'Facebook',
      url: 'https://www.facebook.com',
      svgViewBox: '0 0 24 24',
      svgPath: 'M22.675 0h-21.35C.601 0 0 .601 0 1.325v21.35C0 23.399.601 24 1.325 24h21.35C23.399 24 24 23.399 24 22.675V1.325C24 .601 23.399 0 22.675 0zm-3.05 12.163h-3.654v9.223h-4.055v-9.223h-2.79V8.653h2.79V6.566c0-3.325 1.919-5.142 4.822-5.142 1.42 0 2.638.105 2.995.151v3.472h-2.002c-1.571 0-1.88.747-1.88 1.835v2.402h3.754l-.489 3.51z'
    },
    {
      nombre: 'Instagram',
      url: 'https://www.instagram.com',
      svgViewBox: '0 0 30 30',
      svgPath: 'M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z'
    }
  ];

  irAlSitio(url: string) {
    window.open(url, '_blank');
  }

  isModalVisible :boolean = true ; // Muestra el modal al iniciar

  // Este método cierra el modal
  closeModal() {
    this.isModalVisible = false;
  }

  name: string = '';
  email: string = '';
  message: string = '';

  // Método de envío
  onSubmit() {
    if (this.name && this.email && this.message) {
      if (!this.isValidName(this.name)) {
        alert('El nombre solo puede contener letras.');
        return;
      }

      if (!this.isValidEmail(this.email)) {
        alert('El correo electrónico no es válido.');
        return;
      }

      console.log('Datos del formulario:', {
        name: this.name,
        email: this.email,
        message: this.message
      });

      alert("Tu información se guardó con éxito");
      this.resetForm();
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  // Reinicia el formulario
  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  // Validación del nombre
  isValidName(name: string): boolean {
    const namePattern = /^[A-Za-záéíóúÁÉÍÓÚÑñ ]+$/;
    return namePattern.test(name);
  }

  // Validación del correo electrónico
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
}





