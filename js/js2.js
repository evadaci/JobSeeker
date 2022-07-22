const TAG_ACTIVE_CLASS = 'tag--active';
const SEARCH_HIDDEN_CLASS = 'search--hidden';
const CLOSE_TAG_CLASS = 'close-tag';
const TAG_CLASS = 'tag';

const jobsListings = [
  {
    "id": 1,
    "company": "Pragmatic.al",
    "logo": "./images/pragmatic.png",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "Albania Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "apply": "Apply",
    "link": [URL="https://www.pragmatic.al/"]
  },
  {
    "id": 2,
    "company": "iKubINFO.al",
    "logo": "./images/ikub.png",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"],
    "apply": "Apply",
    "link": [URL="https://ikubinfo.al/"]
  },
  {
    "id": 3,
    "company": "Flex Business",
    "logo": "./images/flex.png",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "Albania Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Angular"],
    "apply": "Apply",
    "link": [URL="https://www.flex.al/"]
  },
  {
    "id": 4,
    "company": "Lufthansa",
    "logo": "./images/lufthansa.png",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "Albania Only",
    "languages": ["CSS", "JavaScript"],
    "apply": "Apply",
    "link": [URL="https://www.lufthansa-industry-solutions.com/de-en/career"]
  },
  {
    "id": 5,
    "company": "Deloitte",
    "logo": "./images/deloitte.png",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "FullStack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"],
    "apply": "Apply",
    "link": [URL="https://www2.deloitte.com/al/en.html"]
  },
  {
    "id": 6,
    "company": "Division5",
    "logo": "./images/division.png",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Albania Only",
    "tools": ["RoR"],
    "apply": "Apply",
    "link": [URL="https://division5.co/"]
  },
  {
    "id": 7,
    "company": "Data Max",
    "logo": "./images/Datamax.png",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Albania Only",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"],
    "apply": "Apply",
    "link": [URL="https://www.data-max.io/"]
  },
  {
    "id": 8,
    "company": "Smartwork",
    "logo": "./images/smartwork.png",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Albania Only",
    "languages": ["JavaScript"],
    "tools": ["Vue, Sass"],
    "apply": "Apply",
    "link": [URL="https://smartworknet.eu/"]
  },
  {
    "id": 9,
    "company": "Landmark",
    "logo": "./images/landmark.png",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"],
    "apply": "Apply",
    "link": [URL="https://landmark.al/"]
  }, 
    {
    "id": 10,
    "company": "RWS Solutions",
    "logo": "./images/rws.png",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"],
    "apply": "Apply",
    "link": [URL="https://www.rws-solutions.com/"]
  }
];

function getTagHTML(tag, tagClasses) {
    return `<span class="${tagClasses}">
                ${tag}
            </span>`;
}

function getJobListingHTML(jobData, filterTags = []) {
    const JOB_TAGS_PLACEHOLDER = '###JOB_TAGS###';
    let jobListingHTML = `
        <div class="jobs__item">
            <div class="jobs__column jobs__column--left">

                <img src="${jobData.logo}" alt="${jobData.company}" class="jobs__img" />
                <div class="jobs__info">
                    <span class="jobs__company">${jobData.company}</span>
                    <span class="jobs__title">${jobData.position}</span>
                    <a href="${jobData.link}"><span style="color: blue;
                                                            font-style: Maiandra GD;
                                                            font-size: 30px;
                                                            font-weight: 500;
                                                            display: block;
                                                            margin-bottom: 15px;">
                    ${jobData.apply}</span></a>
                    <ul class="jobs__details">
                        <li class="jobs__details-item">${jobData.postedAt}</li>
                        <li class="jobs__details-item">${jobData.contract}</li>
                        <li class="jobs__details-item">${jobData.location}</li>
                    </ul>
                </div>
            </div>
            <div class="jobs__column jobs__column--right">
                ${JOB_TAGS_PLACEHOLDER}
            </div>
        </div>
    `;

    const tagsList = [
        jobData.role,
        jobData.level,
        ...(jobData.languages || []),
        ...(jobData.tools || [])
    ];
    
    
    const tagsListLowercase = tagsList.map(t => t && t.toLowerCase());
    const passesFilter = !filterTags.length || filterTags.every(tag => (
        tagsListLowercase.includes(tag && tag.toLowerCase())
    ));
    
    if (!passesFilter) {
        return '';
    }

    const tagsString = tagsList.reduce((acc, currentTag) => {
        const activeClass = (filterTags.includes(currentTag) && TAG_ACTIVE_CLASS) || '';

        return acc + getTagHTML(currentTag, `${TAG_CLASS} ${activeClass}`);
    }, '');

    return jobListingHTML.replace(JOB_TAGS_PLACEHOLDER, tagsString);
}

function toggleClass(el, className) {
    if (el.classList.contains(className)) {
        el.classList.remove(className);

        return;
    }
    
    el.classList.add(className);
}

function getSearchBarTags(tagValue, searchContentEl) {
    let searchBarTags = Array.from(searchContentEl.children)
        .map(node => node.innerHTML && node.innerHTML.trim())
        .filter(tag => !!tag);

    if (searchBarTags.includes(tagValue)) {
        searchBarTags = searchBarTags.filter(tag => tag !== tagValue);
    } else {
        searchBarTags = [...searchBarTags, tagValue];
    }

    return searchBarTags;
}

function setJobsListings(filterTags) {
    const jobsListingsHTML = jobsListings.reduce((acc, currentListing) => {
        return acc + getJobListingHTML(currentListing, filterTags);
    }, '');
    
    document.getElementById('jobs').innerHTML = jobsListingsHTML;
}

function displaySearchWrapper(display = false) {
    const searchWrapper = document.getElementById('search');
    
    if (display) {
        searchWrapper.classList.remove(SEARCH_HIDDEN_CLASS);

        return;
    }

    searchWrapper.classList.add(SEARCH_HIDDEN_CLASS);
}

function setSearchbarContent(searchContentEl, tags) {
    searchContentEl.innerHTML = tags.reduce((acc, currentTag) => {
        return acc + getTagHTML(currentTag, CLOSE_TAG_CLASS);
    }, '');
}

function resetState(searchContentEl) {
    searchContentEl.innerHTML = '';

    setJobsListings();
    displaySearchWrapper(false);
    toggleClass(targetEl, TAG_ACTIVE_CLASS);
}

window.addEventListener('click', (event) => {
    const targetEl = event.target;
    const targetText = targetEl.innerHTML.trim();
    const searchContentEl = document.getElementById('search-content');
    const searchBarTags = getSearchBarTags(targetText, searchContentEl);

    if (targetEl.id === 'clear' || !searchBarTags.length) {
        resetState(searchContentEl);

        return;
    }

    if (![TAG_CLASS, CLOSE_TAG_CLASS].some(c => targetEl.classList.contains(c))) {
        return;
    }

    setSearchbarContent(searchContentEl, searchBarTags);
    toggleClass(targetEl, TAG_ACTIVE_CLASS);
    displaySearchWrapper(searchBarTags.length > 0);
    setJobsListings(searchBarTags);
});

setJobsListings();