document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted! Thank you for contacting us.');
});

// Function to redirect to YouTube channel
function subscribeToYouTube() {
  window.location.href = 'https://www.youtube.com/channel/CHANNEL_1'; // Replace with actual channel link
}

// Function to open enrollment form
function enrollCourse() {
  window.open('https://docs.google.com/forms/d/154HO44NSeQhI-45D2Ys_5ZQlV9j_Fesa5KrPD5q3FDE/edit', '_blank'); // Replace with your Google Form link
}

// Function to handle book purchase
function buyBook(bookId) {
  switch(bookId) {
    case 'book1':
      window.location.href = 'https://www.amazon.in/dp/B0D77184NM'; // Replace with your payment gateway link for Book 1
      break;
    case 'book2':
      window.location.href = 'https://www.amazon.com/Foundations-Self-Love-Building-Journey-ebook/dp/B0CZGYXW4L'; // Replace with your payment gateway link for Book 2
      break;
    case 'book3':
      window.location.href = 'https://www.amazon.com/dp/B0D7M7V1HP?ref=cm_sw_r_mwn_dp_3PG6S0ZCT2PB0DWD5RX3&ref_=cm_sw_r_mwn_dp_3PG6S0ZCT2PB0DWD5RX3&social_share=cm_sw_r_mwn_dp_3PG6S0ZCT2PB0DWD5RX3&language=en_US'; // Replace with your payment gateway link for Book 3
      break;
    // Add more cases for additional books
  }
}

// Function to redirect to experience page
function goToExperiencePage() {
  window.location.href = 'experience.html';
}

// Function to redirect to book details page
function bookDetail() {
  window.location.href = 'book.html';
}

// Function to redirect to about page
function aboutme() {
  window.location.href = 'about.html';
}

// Function to redirect to YouTube courses page
function youtubeCourse() {
  window.location.href = 'youtubeCourse.html';
}

// Function to open YouTube video in new tab
function watchVideo(videoUrl) {
  window.open(videoUrl, '_blank');
}

let currentTestimonial = 0;
const testimonials = [
    {
        type: 'image',
        media: 'images/customer.jpg',
        text: '"Review 1" - by'
    },
    {
        type: 'image',
        media: 'images/customer2.jpg',
        text: '"Review 2" - by'
    },
    {
        type: 'video',
        media: 'images/testimonial2.mp4',
        text: '"Review 3" - by'
    },
    {
        type: 'image',
        media: 'images/customer4.jpg',
        text: '"Reveiw 4" - by'
    },
    {
        type: 'video',
        media: 'videos/customer5.mp4',
        text: '"Review 5" - by'
    }
];

function showTestimonial(index) {
    const testimonial = testimonials[index];
    const imgElement = document.getElementById('testimonial-img');
    const videoElement = document.getElementById('testimonial-video');
    
    if (testimonial.type === 'image') {
        imgElement.src = testimonial.media;
        imgElement.style.display = 'block';
        videoElement.style.display = 'none';
    } else if (testimonial.type === 'video') {
        videoElement.querySelector('source').src = testimonial.media;
        videoElement.load();
        imgElement.style.display = 'none';
        videoElement.style.display = 'block';
    }
    
    document.getElementById('testimonial-text').textContent = testimonial.text;
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial > 0) ? currentTestimonial - 1 : testimonials.length - 1;
    showTestimonial(currentTestimonial);
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial < testimonials.length - 1) ? currentTestimonial + 1 : 0;
    showTestimonial(currentTestimonial);
}

document.addEventListener('DOMContentLoaded', function() {
    showTestimonial(currentTestimonial);
});