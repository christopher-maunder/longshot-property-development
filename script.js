// ============================================
// Property Data - Update with your actual properties
// ============================================

const properties = [
    {
        id: 1,
        title: "The Albers Building",
        price: "Mixed-Use Property",
        priceNumeric: 0,
        type: "Mixed-Use Rental Property",
        beds: 6,
        baths: 0,
        description: "The Albers Building is a beautifully restored mixed-use property featuring 6 spacious residential rental units and 2 commercial units. This distinctive historic building combines classic charm with modern amenities and flexible space configurations, offering an ideal home for residents and a vibrant storefront opportunity for local businesses. Located in a thriving downtown area with excellent foot traffic and community engagement.",
        units: {
            residential: 6,
            commercial: 2,
            total: 8
        },
        images: ["Longshot01.jpg", "Longshot02.jpg", "Longshot03.jpg"],
        ownership: "owned"
    },
    {
        id: 2,
        title: "Marcellus Flats",
        price: "Modern Rental Apartments",
        priceNumeric: 0,
        type: "Contemporary Residential",
        beds: 12,
        baths: 0,
        description: "Marcellus Flats features beautifully designed modern apartments with contemporary finishes and open-concept living spaces. Each unit is thoughtfully crafted with premium fixtures, expansive kitchens, and abundant natural lighting. Perfect for professionals and families seeking stylish, comfortable urban living with all the conveniences of a well-managed residential community.",
        units: {
            residential: 12,
            commercial: 0,
            total: 12
        },
        images: ["Marcellus Flats/MarcellusFlats01.jpg", "Marcellus Flats/MarcellusFlats02.jpg"],
        ownership: "managed"
    }
];

let currentPropertyIndex = 0;
let currentModalImageIndex = 0;

// ============================================
// Residential Units Data - Floorplans
// ============================================

const residentialUnits = [
    {
        id: 201,
        name: "Unit #201",
        bedrooms: 1,
        bathrooms: 1,
        description: "A single bedroom unit with a North facing view through 9' tall windows. The unit includes unique exposed brick accents along windows and a chimney original to the building in the bedroom. The modern style coupled with 12' ceiling consistent through all units gives this small unit a big feel. This unit also includes a hybrid washer/dryer.",
        amenities: ["Hybrid Washer/Dryer", "Exposed Brick Accents", "9' Tall Windows", "12' Ceilings", "All Appliances", "Fiber Internet"],
        image: "Albers/Flats/201/Floorplan.jpg",
        property: "The Albers Building"
    },
    {
        id: 202,
        name: "Unit #202",
        bedrooms: 1,
        bathrooms: 1,
        description: "Talk about views! Unit 202, a single bed unit, commands a full look at the square through its 9' tall windows. It's incredible natural lighting, high ceilings, and exposed brick details make a show piece unit. This unit includes a hybrid washer/dryer.",
        amenities: ["Hybrid Washer/Dryer", "Exposed Brick Details", "9' Tall Windows", "Square Views", "12' Ceilings", "All Appliances", "Fiber Internet"],
        image: "Albers/Flats/202/Floorplan.jpg",
        property: "The Albers Building"
    },
    {
        id: 203,
        name: "Unit #203",
        bedrooms: 2,
        bathrooms: 1,
        description: "How do you feel about a view of the night sky over a kitchen island? Original to the building, the skylight was fixed and updated with a modern acrylic cover to give a unique feature to this unit. 203 boasts 2 bedrooms, high 12' ceilings, an expansive kitchen and an East view of the square. Unit includes tower washer/dryer.",
        amenities: ["Tower Washer/Dryer", "Skylight Feature", "Kitchen Island", "Expansive Kitchen", "12' Ceilings", "Exposed Brick", "All Appliances", "Fiber Internet"],
        image: "Albers/Flats/203/Floorplan.jpg",
        property: "The Albers Building"
    },
    {
        id: 204,
        name: "Unit #204",
        bedrooms: 2,
        bathrooms: 1,
        description: "Accessible by the new exterior steel staircase, this two bedroom unit has a bit more privacy. It features an exposed header in one bedroom along with 12' ceilings and windows to catch the South light year round. The layout provides nice separation between the large kitchen and living room space and the back where the bedrooms and bathroom are located. Tower washer/dryer included.",
        amenities: ["Tower Washer/Dryer", "Private Entry", "South Facing Windows", "Exposed Header", "12' Ceilings", "Spacious Kitchen", "All Appliances", "Fiber Internet"],
        image: "Albers/Flats/204/Floorplan.jpg",
        property: "The Albers Building"
    },
    {
        id: 205,
        name: "Unit #205",
        bedrooms: 2,
        bathrooms: 1.5,
        description: "This 2 bedroom unit gives the panoramic view with windows on the North, West, and South. The volume of natural light filling this space makes light fixtures irrelevant until the sun sets. Both bedrooms are set on the West of the unit through an opening that used to divide the rest of the upstairs to the old elevator room. This unit includes a tower washer dryer.",
        amenities: ["Tower Washer/Dryer", "Panoramic Views", "North/West/South Windows", "Extra Half Bath", "12' Ceilings", "All Appliances", "Fiber Internet"],
        image: "Albers/Flats/205/Floorplan.jpg",
        property: "The Albers Building"
    },
    {
        id: 301,
        name: "Unit #301",
        bedrooms: 1,
        bathrooms: 1,
        description: "This contemporary 1-bedroom unit features an open-concept living and dining area with premium finishes. Sleek black stainless steel appliances, white cabinetry, and modern fixtures create an elegant aesthetic. Large windows provide abundant natural lighting, while the spacious floor plan makes efficient use of every square foot.",
        amenities: ["In-Unit Washer/Dryer", "Premium Appliances", "Open Concept", "Modern Fixtures", "Large Windows", "All Utilities Included", "Fiber Internet", "Smart Home Ready"],
        image: "Marcellus Flats/MarcellusFlats01.jpg",
        property: "Marcellus Flats"
    },
    {
        id: 302,
        name: "Unit #302",
        bedrooms: 1,
        bathrooms: 1,
        description: "A sophisticated 1-bedroom residence with high-end finishes and contemporary design. The kitchen island serves as both a workspace and gathering spot, while the open layout seamlessly connects the living, dining, and kitchen areas. Perfect for professionals seeking modern urban living.",
        amenities: ["In-Unit Washer/Dryer", "Kitchen Island", "Premium Appliances", "Modern Design", "Open Living Space", "All Utilities Included", "Fiber Internet", "Smart Home Ready"],
        image: "Marcellus Flats/MarcellusFlats02.jpg",
        property: "Marcellus Flats"
    },
    {
        id: 303,
        name: "Unit #303",
        bedrooms: 2,
        bathrooms: 2,
        description: "This luxurious 2-bedroom, 2-bathroom unit offers exceptional comfort and style. The modern kitchen features stainless steel appliances and premium cabinetry, while the separate bedrooms provide privacy and convenience. High ceilings and abundant windows create a bright, airy atmosphere throughout.",
        amenities: ["In-Unit Washer/Dryer", "Two Full Bathrooms", "Premium Appliances", "Modern Fixtures", "High Ceilings", "All Utilities Included", "Fiber Internet", "Smart Home Ready"],
        image: "Marcellus Flats/MarcellusFlats01.jpg",
        property: "Marcellus Flats"
    },
    {
        id: 304,
        name: "Unit #304",
        bedrooms: 2,
        bathrooms: 2,
        description: "Experience contemporary luxury in this stunning 2-bedroom, 2-bathroom apartment. The expansive kitchen with island seating, modern appliances, and open floor plan create an ideal space for entertaining and daily living. Large windows throughout ensure natural light and modern aesthetics.",
        amenities: ["In-Unit Washer/Dryer", "Kitchen Island", "Two Full Bathrooms", "Luxury Finishes", "High Ceilings", "All Utilities Included", "Fiber Internet", "Smart Home Ready"],
        image: "Marcellus Flats/MarcellusFlats02.jpg",
        property: "Marcellus Flats"
    }
];

// ============================================
// Initialize Page
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    loadProperties();
    setupModalHandlers();
    setupUnitModalHandlers();
    setupContactForm();
    populatePropertyDropdown();
});

// ============================================
// Load and Display Properties
// ============================================

function loadProperties() {
    const ownedGrid = document.getElementById('ownedPropertiesGrid');
    const managedGrid = document.getElementById('managedPropertiesGrid');
    ownedGrid.innerHTML = '';
    managedGrid.innerHTML = '';

    properties.forEach(property => {
        const card = createPropertyCard(property);
        if (property.ownership === 'managed') {
            managedGrid.appendChild(card);
        } else {
            ownedGrid.appendChild(card);
        }
    });
}

function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    const unitInfo = property.units 
        ? `<span>🏢 ${property.units.residential} Residential</span><span>🏪 ${property.units.commercial} Commercial</span>`
        : `${property.beds > 0 ? `<span>🛏️ ${property.beds} Beds</span>` : ''}${property.baths > 0 ? `<span>🚿 ${property.baths} Baths</span>` : ''}`;
    
    const badge = property.ownership === 'managed'
        ? `<span class="ownership-badge managed">Managed by Longshot</span>`
        : `<span class="ownership-badge owned">Longshot Owned</span>`;

    card.innerHTML = `
        <div class="property-image-wrapper">
            <img src="${property.images[0]}" alt="${property.title}" class="property-image">
            ${badge}
        </div>
        <div class="property-info">
            <h3 class="property-title">${property.title}</h3>
            <div class="property-price">${property.price}</div>
            <div class="property-quick-info">
                <span>${property.type}</span>
                ${unitInfo}
            </div>
            <button class="view-btn" onclick="openPropertyModal(${property.id})">View Details</button>
        </div>
    `;
    return card;
}

// ============================================
// Modal Management
// ============================================

function setupModalHandlers() {
    const modal = document.getElementById('propertyModal');
    const closeBtn = document.querySelector('.close');

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

function openPropertyModal(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    currentPropertyIndex = properties.findIndex(p => p.id === propertyId);
    currentModalImageIndex = 0;

    // Update modal content
    document.getElementById('modalTitle').textContent = property.title;
    document.getElementById('modalType').textContent = property.type;
    document.getElementById('modalBeds').textContent = property.units ? property.units.residential : property.beds;
    document.getElementById('modalBaths').textContent = property.units ? property.units.commercial : property.baths;
    document.getElementById('modalTotal').textContent = property.units ? property.units.total : 'N/A';
    document.getElementById('modalDescription').textContent = property.description;
    document.getElementById('modalImage').src = property.images[0];

    // Load residential units in modal
    loadResidentialUnitsInModal();

    // Show modal
    document.getElementById('propertyModal').style.display = "block";
}

function changeModalImage(direction) {
    const property = properties[currentPropertyIndex];
    currentModalImageIndex += direction;

    // Wrap around
    if (currentModalImageIndex >= property.images.length) {
        currentModalImageIndex = 0;
    } else if (currentModalImageIndex < 0) {
        currentModalImageIndex = property.images.length - 1;
    }

    document.getElementById('modalImage').src = property.images[currentModalImageIndex];
}

// ============================================
// Load and Display Residential Units
// ============================================

function loadResidentialUnitsInModal() {
    const grid = document.getElementById('modalUnitsGrid');
    grid.innerHTML = '';

    const currentProperty = properties[currentPropertyIndex];
    const propertyUnits = residentialUnits.filter(unit => unit.property === currentProperty.title);

    propertyUnits.forEach(unit => {
        const card = createModalUnitCard(unit);
        grid.appendChild(card);
    });
}

function createModalUnitCard(unit) {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.innerHTML = `
        <img src="${unit.image}" alt="${unit.name}" class="unit-image">
        <div class="unit-info">
            <h3 class="unit-title">${unit.name}</h3>
            <div class="unit-quick-info">
                <span>🛏️ ${unit.bedrooms} Bed${unit.bedrooms > 1 ? 's' : ''}</span>
                <span>🚿 ${unit.bathrooms} Bath${unit.bathrooms > 1 ? 's' : ''}</span>
            </div>
            <button class="view-btn" onclick="openUnitModal(${unit.id})">View Details</button>
        </div>
    `;
    return card;
}

function loadResidentialUnits() {
    const grid = document.getElementById('unitsGrid');
    grid.innerHTML = '';

    residentialUnits.forEach(unit => {
        const card = createUnitCard(unit);
        grid.appendChild(card);
    });
}

function createUnitCard(unit) {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.innerHTML = `
        <img src="${unit.image}" alt="${unit.name}" class="unit-image">
        <div class="unit-info">
            <h3 class="unit-title">${unit.name}</h3>
            <div class="unit-quick-info">
                <span>🛏️ ${unit.bedrooms} Bed${unit.bedrooms > 1 ? 's' : ''}</span>
                <span>🚿 ${unit.bathrooms} Bath${unit.bathrooms > 1 ? 's' : ''}</span>
            </div>
            <button class="view-btn" onclick="openUnitModal(${unit.id})">View Floorplan</button>
        </div>
    `;
    return card;
}

// ============================================
// Unit Modal Management
// ============================================

function setupUnitModalHandlers() {
    const modal = document.getElementById('unitModal');
    
    window.closeUnitModal = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

function openUnitModal(unitId) {
    const unit = residentialUnits.find(u => u.id === unitId);
    if (!unit) return;

    // Update modal content
    document.getElementById('unitTitle').textContent = unit.name;
    document.getElementById('unitBeds').textContent = unit.bedrooms;
    document.getElementById('unitBaths').textContent = unit.bathrooms;
    document.getElementById('unitDescription').textContent = unit.description;
    document.getElementById('unitImage').src = unit.image;

    // Populate amenities list
    const amenitiesList = document.getElementById('amenitiesList');
    amenitiesList.innerHTML = '';
    unit.amenities.forEach(amenity => {
        const li = document.createElement('li');
        li.textContent = amenity;
        amenitiesList.appendChild(li);
    });

    // Show modal
    document.getElementById('unitModal').style.display = "block";
}

// ============================================
// Contact Form Handling
// ============================================

function setupContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email || !data.message) {
        showFormStatus('Please fill in all required fields.', 'error');
        return;
    }

    if (!isValidEmail(data.email)) {
        showFormStatus('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Here you would normally send the data to a backend service
    // For now, we'll simulate it with a timeout
    setTimeout(() => {
        // Log the form data (in a real app, send to backend)
        console.log('Form submitted:', data);

        showFormStatus('Thank you! Your lease inquiry has been submitted. We will contact you soon to discuss available units.', 'success');

        // Reset form
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

function showFormStatus(message, type) {
    const statusDiv = document.getElementById('formStatus');
    statusDiv.textContent = message;
    statusDiv.className = 'form-status ' + type;

    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            statusDiv.className = 'form-status';
        }, 5000);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function populatePropertyDropdown() {
    const select = document.getElementById('property');
    properties.forEach(property => {
        const option = document.createElement('option');
        option.value = property.id;
        option.textContent = `${property.title} - ${property.price}`;
        select.appendChild(option);
    });
}

// ============================================
// Utility Functions
// ============================================

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('propertyModal').style.display = "none";
    document.getElementById('unitModal').style.display = "none";
}

// ============================================
// Analytics (Optional - Update with your tracking ID)
// ============================================

function trackEvent(eventName, eventData) {
    console.log('Event tracked:', eventName, eventData);
    // Add your analytics tracking code here (Google Analytics, etc.)
}
