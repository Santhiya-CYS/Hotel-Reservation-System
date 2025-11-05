// HotelEase - Hotel Reservation System
const hotels = [
  {name: "Hotel Ashoka Residency", price: 2500, rating: 4.1, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500", amenities: ["Free WiFi", "Complimentary Breakfast", "Free Parking"], location: "Connaught Place, New Delhi", description: "Budget-friendly hotel in the heart of Delhi with clean rooms and friendly staff."},
  {name: "The Grand Maharaja", price: 4500, rating: 4.5, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500", amenities: ["Swimming Pool", "Gym", "Multi-Cuisine Restaurant", "Free WiFi"], location: "MG Road, Bangalore", description: "Modern hotel with excellent amenities in Bangalore's commercial hub."},
  {name: "Taj Heritage Palace", price: 8500, rating: 4.8, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500", amenities: ["Spa & Wellness", "Rooftop Pool", "Fine Dining", "24/7 Concierge"], location: "Marine Drive, Mumbai", description: "Luxury hotel with stunning sea views and world-class hospitality."},
  {name: "Royal Rajputana Resort", price: 12000, rating: 4.9, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500", amenities: ["Butler Service", "Private Pool", "Rajasthani Cuisine", "Heritage Tours"], location: "City Palace Area, Jaipur", description: "Experience royal Rajasthani hospitality in this magnificent heritage property."},
  {name: "Goa Beach Paradise", price: 6500, rating: 4.6, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500", amenities: ["Beach Access", "Water Sports", "Seafood Restaurant", "Bar & Lounge"], location: "Calangute Beach, Goa", description: "Beachfront resort offering water sports and stunning sunset views."},
  {name: "Business Hub Inn", price: 3800, rating: 4.4, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500", amenities: ["Conference Rooms", "High-Speed WiFi", "Business Center", "Airport Shuttle"], location: "Cyber City, Gurugram", description: "Ideal for business travelers with modern meeting facilities and connectivity."},
  {name: "Hill Station Retreat", price: 5500, rating: 4.7, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500", amenities: ["Mountain View", "Bonfire", "Trekking Guide", "Organic Restaurant"], location: "Mall Road, Shimla", description: "Serene mountain resort with breathtaking Himalayan views and adventure activities."},
  {name: "Imperial Leela Palace", price: 18000, rating: 5.0, image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=500", amenities: ["Presidential Suite", "Private Butler", "Michelin Star Restaurant", "Helipad"], location: "Diplomatic Enclave, New Delhi", description: "Ultra-luxury five-star hotel offering unparalleled opulence and service."},
  {name: "Kerala Backwater Resort", price: 7500, rating: 4.8, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500", amenities: ["Houseboat Experience", "Ayurvedic Spa", "Kerala Cuisine", "Yoga Classes"], location: "Alleppey Backwaters, Kerala", description: "Experience tranquil backwaters with traditional Kerala hospitality and cuisine."},
  {name: "Hyderabad Grand Heritage", price: 5200, rating: 4.5, image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500", amenities: ["Biryani Restaurant", "Rooftop Cafe", "Cultural Shows", "Free WiFi"], location: "Banjara Hills, Hyderabad", description: "Modern hotel celebrating Hyderabadi culture with authentic cuisine and hospitality."},
  {name: "Lotus Garden Hotel", price: 3200, rating: 4.2, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500", amenities: ["Garden Restaurant", "Yoga Center", "Ayurvedic Treatments", "Free Parking"], location: "Koramangala, Bangalore", description: "Peaceful hotel with lush gardens perfect for relaxation and rejuvenation."},
  {name: "Varanasi Temple View", price: 4200, rating: 4.4, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500", amenities: ["Ganges View", "Temple Tours", "Vegetarian Restaurant", "Cultural Events"], location: "Assi Ghat, Varanasi", description: "Spiritual retreat with stunning views of the holy Ganges river and temples."},
  {name: "Agra Fort Heritage Hotel", price: 5800, rating: 4.6, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500", amenities: ["Taj Mahal View", "Mughlai Restaurant", "Heritage Walk", "Rooftop Dining"], location: "Taj Ganj, Agra", description: "Historic hotel offering magnificent views of the Taj Mahal and Mughal architecture."},
  {name: "Pondicherry French Villa", price: 6200, rating: 4.7, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500", amenities: ["French Cuisine", "Beach View", "Spa", "Bicycle Rental"], location: "White Town, Pondicherry", description: "Charming boutique hotel blending French colonial elegance with Indian warmth."},
  {name: "Udaipur Lake Palace View", price: 9500, rating: 4.9, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500", amenities: ["Lake View", "Royal Dining", "Boat Rides", "Cultural Programs"], location: "Lake Pichola, Udaipur", description: "Romantic lakeside hotel with stunning palace views and royal Rajasthani ambiance."}
];

const createHotelCard = h => `
  <div class="hotel-card">
    <div class="hotel-image">
      <img src="${h.image}" alt="${h.name}">
      <div class="hotel-rating"><i class="fas fa-star"></i> ${h.rating}</div>
    </div>
    <div class="hotel-content">
      <h4>${h.name}</h4>
      <p class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${h.location}</p>
      <p class="hotel-description">${h.description}</p>
      <div class="hotel-amenities">${h.amenities.map(a => `<span class="amenity-tag"><i class="fas fa-check"></i> ${a}</span>`).join('')}</div>
      <div class="hotel-footer">
        <div class="hotel-price">
          <span class="price-label">Per Night</span>
          <span class="price-value">₹${h.price.toLocaleString('en-IN')}</span>
        </div>
        <button class="btn btn-primary btn-book" onclick="alert('🎉 Booking ${h.name}!\\n\\nPrice: ₹${h.price.toLocaleString('en-IN')} per night\\n\\nYou will be redirected to the secure payment page.')">
          <i class="fas fa-calendar-check"></i> Book Now
        </button>
      </div>
    </div>
  </div>
`;

const handleFormSubmit = (formId, message, delay = 1500) => {
  const form = document.getElementById(formId);
  if (!form) return;
  
  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;
    
    setTimeout(() => {
      if (formId === "bookingForm") {
        const container = document.getElementById("hotelCards");
        const section = document.getElementById("hotelSuggestions");
        if (container && section) {
          container.innerHTML = hotels.map(createHotelCard).join('');
          section.style.display = 'block';
          setTimeout(() => section.scrollIntoView({behavior: 'smooth'}), 100);
        }
      } else {
        alert(message);
        form.reset();
      }
      btn.innerHTML = '<i class="fas fa-check"></i> Done!';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 1000);
    }, delay);
  });
};

handleFormSubmit("bookingForm", "✅ Hotels found!");
handleFormSubmit("contactForm", "✅ Thank you! We'll get back to you within 24 hours.");

// Set minimum date to today
document.querySelectorAll('input[type="date"]').forEach(i => i.setAttribute('min', new Date().toISOString().split('T')[0]));

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  const target = document.querySelector(a.getAttribute('href'));
  if (target) target.scrollIntoView({behavior: 'smooth'});
}));

// Set active navigation link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

// Animate elements on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold: 0.1, rootMargin: '0px 0px -50px 0px'});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card, .info-card, .stat-item, .mv-card, .achievement-item').forEach(el => {
    el.style.cssText = 'opacity:0; transform:translateY(20px); transition:opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

console.log('%c🏨 HotelEase ', 'background: linear-gradient(135deg, #00adb5, #08d9d6); color: white; padding: 10px 20px; font-size: 20px; font-weight: bold; border-radius: 5px;');
console.log('%cDeveloped by Code Alchemists Team', 'color: #08d9d6; font-size: 14px; font-style: italic;');
