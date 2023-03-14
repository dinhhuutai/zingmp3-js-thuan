/**
 * 1. Render songs
 * 2. Scroll top
 * 3. Play / pause / seek
 * 4. CD rotate
 * 5. Next / prev
 * 6. Random
 * 7. Next / Repeat when ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click
 * 
 */


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const main = $('#main');

const sidebarItems = $$('.sidebar-item');

const headerRightTheme = $('.header-right--theme');
const mainHeaderWrapper = $('.main-header-wrapper');
const headerSearch = $('.header-search');
const headerSearchSub = $('.header-search--sub');

const modalTheme = $('.modal-theme');
const modalClose = $('.modal-header--close');
const modalOverlay = $('.modal-overlay');
const modalContainer = $('.modal-container');

const mainBackgrounds = $$('.modal-body--topic-item');

const mainContainerDiscover = $('.main-container__body-discover');
const mainContainerPersonal = $('.main-container__body-personal');
const mainContainerZing = $('.main-container__body-zing');

const mainNextSong = $('.main-next-song');

const rootStyle = document.documentElement.style;

const nextSongOptionPlaylist = $('.main-next-song__option--playlist');
const nextSongOptionHistory = $('.main-next-song__option--history');
const nextSongOptionActive = $('.main-next-song__option--active');


const mainDiscoverSliders = $$('.main--discover--slider');
const mainDiscoderLeft = $('.main--discover-slider-left');
const mainDiscoderRight = $('.main--discover-slider-right');

const mainPersonalOptions = $$('.main-container--music-option-item');
const mainOptionActive = $('.main-container--music-option-action');
const mainPersonalList = $('.main-container--music-option-list');

const musicImgList = $('.container--music-all-img-list');
const musicAllList = $('.container--music-all-list');
const musicListSong = $('.container--music-list-song');
const musicListZing = $('.zing-container--music-all-list');

const bodyMusicAllSong = $('.main-container--music-all-song');
const bodyListMusic = $('.main-container--list-music');
const bodyPlaylist = $('.main-container--playlist');
const bodyContainer = $('.main-container--singer');

const zingViewAdd = $('.zing-container-view-add');
const zingHideMusic = $('.zing-container-hide-music');
const zingRankVie = $('.main-container__body-zing-rank-Vie-list');
const zingRankUs = $('.main-container__body-zing-rank-Us-list');
const zingRankK = $('.main-container__body-zing-rank-k-list');

const mainSongBox = $('.main-next-song__box');
const mainSong = $('.main-next-song__box-fist');
const mainSongNext = $('.container--music-all-item-wrapper-list');

const controlFavourite = $('.main-control-song-music-option-favourite');
const controlNoFavourite = $('.main-control-song-music-option-no-favourite');

const mainControlImg = $('.main-control-song-music-img');
const mainControlName = $('.main-control-song-music-info-name');
const mainControlSinger = $('.main-control-song-music-info-singer');
const mainControlDuration = $('.time-right');

const mainControlImgModal = $('.modal-music--cd');
const mainControlNameModal = $('.modal-music--body-name');
const mainControlSingerModal = $('.modal-music--body-singer');
const mainControlDurationModal = $('.time-right-modal');

const togglePlay = $('.main-container--music-all-song-up-play-all');
const mainControlWrapper = $('.main-control-song-music-wrapper');

const audio = $('.audio');
const playBtn = $('.btn-toggle-play');
const progress = $('.progress');
const progressLine = $('.progress-line');
const timeLeft = $('.time-left');
const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');

const playBtnModal = $('.btn-toggle-play-modal');
const progressModal = $('.progress-modal');
const progressLineModal = $('.progress-line-modal');
const timeLeftModal = $('.time-left-modal');
const prevBtnModal = $('.btn-prev-modal');
const nextBtnModal = $('.btn-next-modal');
const randomBtnModal = $('.btn-random-modal');
const repeatBtnModal = $('.btn-repeat-modal');

const cdthumb = $('.main-control-song-music-img-wrapper');
const cdthumbModal = $('.modal-music--cd-wrapper');

const controlMusic = $('.main-control-song-music-wrapper');

const sound = $('.sound');
const volumeBtn = $('.btn-volume-icon');
const volumeIcons = $$('.btn-volume')

const modalMusic = $('.modal-music');
const closeModalMusic = $('.modal-music-close');

const app = {

    indexSlider: 0,
    indexSliderImg: 0,
    indexBg: 0,
    zingRank: 5,
    isPlay: false,
    isRandom: false,
    isRepeat: false,
    currentIndex: -1,
    arraySong: [],

    dataSongs: [
        {
            img: './assets/img/music_aichungtinhduocmai.jpg',
            name: 'Ai chung tình được mãi',
            singer: 'Đinh Tùng Huy',
            pathSong: 'https://docs.google.com/uc?id=1cw3VcvJ9FhfXauCfLMdBvekySE_pTsSs',
            duration: '05:41',
        },
        {
            img: './assets/img/music_antinhsangtrang.jpg',
            name: 'Ân tình sang trang',
            singer: 'Châu Khải Phong',
            pathSong: 'https://docs.google.com/uc?id=1hcz0LZgTXurRUvMoECR4jx7gVARM3QMM',
            duration: '05:42',
        },
        {
            img: './assets/img/music_lonely.jpg',
            name: 'Lonely remix',
            singer: 'Tiktok',
            pathSong: 'https://docs.google.com/uc?id=1-0TEDeFbGm5aUc-Phuab3067-Jh8JcjT',
            duration: '04:10',
        },
        {
            img: './assets/img/music_duyenduyensoso.jpg',
            name: 'Duyên duyên số số remix',
            singer: 'Du Uyên',
            pathSong: 'https://docs.google.com/uc?id=1E1R3Exc73Y84yp9zgg4sqs-_1Sggxu3l',
            duration: '02:49',
        },
        {
            img: './assets/img/music_dunglonhecoanhday.jpg',
            name: 'Đừng lo nhé có anh đây',
            singer: 'H2O',
            pathSong: 'https://docs.google.com/uc?id=1cw7IKYvicPJY3j51fbRb5icQb5FVbmJb',
            duration: '04:09',
        },
        {
            img: './assets/img/music_nhumotnguoidung.jpg',
            name: 'Như một người dưng',
            singer: 'Nguyễn Thạc Bảo Ngọc',
            pathSong: 'https://docs.google.com/uc?id=1lKMQuSqsRih17GG3URt3egVkzNtvswVb',
            duration: '06:27',
        },
        {
            img: './assets/img/music_itnhungdailau.jpg',
            name: 'Ít nhưng dài lâu',
            singer: 'Chu Thúy Quỳnh x Yan Nguyễn',
            pathSong: 'https://docs.google.com/uc?id=1MtZLllnaielw7Vi2AHX6kkGSKyNQN6Jq',
            duration: '04:43',
        },
        {
            img: './assets/img/music_saocungduoc.jpg',
            name: 'Sao cũng được',
            singer: 'Thành Đạt',
            pathSong: 'https://docs.google.com/uc?id=1m49hDll7vDGSlxWvTjKwdYZ28uw_vCdd',
            duration: '06:07',
        },
        {
            img: './assets/img/music_cuoctinhkhongtronven.jpg',
            name: 'Cuộc tình không trọn vẹn',
            singer: 'Châu Gia Kiệt',
            pathSong: 'https://docs.google.com/uc?id=1ieOr_r0SIHivQlVvhyMQknNQNMbQk_bH',
            duration: '04:20',
        },
        {
            img: './assets/img/music_neuemkhongve.jpg',
            name: 'Nếu anh không về',
            singer: 'Phạm Hoàng Dung cover',
            pathSong: 'https://docs.google.com/uc?id=1nLw9WZk0ZfpczKLGpRzfddL_NR6bz7wv',
            duration: '04:00',
        },
    ],

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.dataSongs[this.currentIndex];
            }
        })
    },

    routeSidebar: function() {
        sidebarItems.forEach((sidebarItem, index) => {
            sidebarItem.onclick = () => {
                $('.sidebar-item.active-sidebar').classList.remove('active-sidebar');
                sidebarItem.classList.add('active-sidebar');

                if(index === 0) {
                    mainContainerDiscover.style.display = 'none';
                    mainContainerPersonal.style.display = 'block';
                    mainContainerZing.style.display = 'none';
                    mainContainerPersonal.scrollTop = 0;
                    Object.assign(mainHeaderWrapper.style, {
                        backgroundColor: `transparent`,
                        boxShadow: 'none',
                    })
                } else if(index === 1) {
                    mainContainerDiscover.style.display = 'block';
                    mainContainerPersonal.style.display = 'none';
                    mainContainerZing.style.display = 'none';
                    mainContainerDiscover.scrollTop = 0;
                    Object.assign(mainHeaderWrapper.style, {
                        backgroundColor: `transparent`,
                        boxShadow: 'none',
                    })
                } else if(index === 2) {
                    mainContainerZing.style.display = 'block';
                    mainContainerDiscover.style.display = 'none';
                    mainContainerPersonal.style.display = 'none';
                    mainContainerZing.scrollTop = 0;
                    Object.assign(mainHeaderWrapper.style, {
                        backgroundColor: `transparent`,
                        boxShadow: 'none',
                    })
                }

            }
        })

    },

    applyTheme: function() {

        nextSongOptionPlaylist.onclick = () => {
            nextSongOptionPlaylist.style.opacity = '1';
            nextSongOptionActive.style.left = '4px';
            nextSongOptionHistory.style.opacity = '0.6';
        }

        nextSongOptionHistory.onclick = () => {
            nextSongOptionHistory.style.opacity = '1';
            nextSongOptionActive.style.left = 'calc(50% - 4px)';
            nextSongOptionPlaylist.style.opacity = '0.6';
        }

        headerRightTheme.onclick = () => {
            modalTheme.classList.add('modal-theme-active');
        }

        modalClose.onclick = () => {
            modalTheme.classList.remove('modal-theme-active');
        }

        modalOverlay.onclick = () => {
            modalTheme.classList.remove('modal-theme-active');
        }

        mainBackgrounds.forEach((mainBackground, index) => {
            mainBackground.onclick = () => {

                this.indexBg = index;

                
                if(this.indexBg <= 6){
                    Object.assign(mainHeaderWrapper.style, {
                        backgroundColor: `var(--header-bg-${this.indexBg})`,
                        boxShadow: 'rgba(0, 0, 0, .1) 0px 3px 5px',
                    })
                } else {
                    Object.assign(mainHeaderWrapper.style, {
                        backgroundColor: `transparent`,
                        boxShadow: 'none',
                    })
                }
                
                if(index <= 6){
                    
                    rootStyle.setProperty('--white-color', "#fff");
                    rootStyle.setProperty('--next-song--option-bg', "rgb(75, 32, 110)");
                    rootStyle.setProperty('--next-song--option-bg-active', "rgb(129, 99, 153)");

                    modalContainer.style.backgroundColor = `var(--header-search-bg-${index})`;
                    headerSearchSub.style.backgroundColor = `var(--header-search-bg-${index})`;
                    rootStyle.setProperty('--sidebar-active-bg', "rgba(255, 255, 255, 0.1)");
                    headerSearch.style.backgroundColor = `hsla(0, 0%, 100%, 0.1)`;
                    mainNextSong.style.borderLeft = '1px solid rgba(255, 255, 255, 0.1)';
                    mainPersonalList.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';

                }

                if(index === 0){
                    main.style.backgroundImage = `url(./assets/img/main_bg-${index}.svg)`;
                } else if(index <= 6) {
                    main.style.backgroundImage = `url(./assets/img/main_bg-${index}.jpg)`;
                }

                if(index >= 3 && index <= 6){
                    rootStyle.setProperty('--white-color', "#000");
                    rootStyle.setProperty('--next-song--option-bg', "rgb(218, 214, 211)");
                    rootStyle.setProperty('--next-song--option-bg-active', "rgb(229, 226, 224)");
                    rootStyle.setProperty('--sidebar-active-bg', "rgb(218, 214, 211)");
                    headerSearch.style.backgroundColor = `rgb(218, 214, 211)`;
                    mainNextSong.style.borderLeft = '1px solid rgba(0, 0, 0, 0.1)';
                    mainPersonalList.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                }
            }

        })
    
            
        mainContainerDiscover.onscroll = () => {
            var scrollTop = mainContainerDiscover.scrollY || mainContainerDiscover.scrollTop;

            if(scrollTop > 5 && this.indexBg <= 6){
                Object.assign(mainHeaderWrapper.style, {
                    backgroundColor: `var(--header-bg-${this.indexBg})`,
                    boxShadow: 'rgba(0, 0, 0, .1) 0px 3px 5px',
                })
            } else {
                Object.assign(mainHeaderWrapper.style, {
                    backgroundColor: `transparent`,
                    boxShadow: 'none',
                })
            }
            
        }

        mainContainerPersonal.onscroll = () => {
            var scrollTop = mainContainerPersonal.scrollY || mainContainerPersonal.scrollTop;

            if(scrollTop > 5 && this.indexBg <= 6){
                Object.assign(mainHeaderWrapper.style, {
                    backgroundColor: `var(--header-bg-${this.indexBg})`,
                    boxShadow: 'rgba(0, 0, 0, .1) 0px 3px 5px',
                })
            } else {
                Object.assign(mainHeaderWrapper.style, {
                    backgroundColor: `transparent`,
                    boxShadow: 'none',
                })
            }
        }
        
    },

    mainSlider: function() {
        const favourites = $$('.container--music-all-item-favourite');
        const noFavourites = $$('.container--music-all-item-no-favourite');
                    
        favourites.forEach((favourite, index) => {
            favourite.onclick = () => {
                favourites[index].style.display = 'none';
                noFavourites[index].style.display = 'block';
            }
        })
                    
        noFavourites.forEach((noFavourite, index) => {
            noFavourite.onclick = () => {
                noFavourites[index].style.display = 'none';
                favourites[index].style.display = 'block';
            }
        })

        const _this = this;

        const handleSlider = () => {

            $('.main--discover--slider.main--discover--slider-first').classList.remove('main--discover--slider-first');
            $('.main--discover--slider.main--discover--slider-second').classList.remove('main--discover--slider-second');
            $('.main--discover--slider.main--discover--slider-third').classList.remove('main--discover--slider-third');

            $$('.main--discover--slider.main--discover--slider-four').forEach(e => {
                e.classList.remove('main--discover--slider-four');
            })

            mainDiscoverSliders[_this.indexSlider].classList.add('main--discover--slider-first');
            mainDiscoverSliders[_this.indexSlider + 1 == mainDiscoverSliders.length ? 0 : _this.indexSlider + 1 > mainDiscoverSliders.length ? 1 : _this.indexSlider + 1].classList.add('main--discover--slider-second');
            mainDiscoverSliders[_this.indexSlider + 2 == mainDiscoverSliders.length ? 0 : _this.indexSlider + 2 > mainDiscoverSliders.length ? 1 : _this.indexSlider + 2].classList.add('main--discover--slider-third');

            mainDiscoverSliders.forEach((mainDiscoverSlider, index) => {
                if(_this.indexSlider != index && _this.indexSlider + 1 != index && _this.indexSlider + 2 != index){
                    mainDiscoverSlider.classList.add('main--discover--slider-four');
                }
            })

            if(_this.indexSlider + 1  == mainDiscoverSliders.length){
                mainDiscoverSliders[0].classList.remove('main--discover--slider-four');
                mainDiscoverSliders[1].classList.remove('main--discover--slider-four');
            } else if (_this.indexSlider + 2  == mainDiscoverSliders.length) {
                mainDiscoverSliders[0].classList.remove('main--discover--slider-four');
            }

        }
        
        var sliderAuto = setInterval(() => {

            if(_this.indexSlider >= mainDiscoverSliders.length - 1){
                _this.indexSlider = 0;
            } else {
                _this.indexSlider++;
            }

            handleSlider();
        }, 4000);

        mainDiscoderLeft.onclick = () => {
            
            if(_this.indexSlider == 0){
                _this.indexSlider = mainDiscoverSliders.length - 1;
            } else {
                _this.indexSlider--;
            }

            clearInterval(sliderAuto);
            handleSlider();

            sliderAuto = setInterval(() => {
    
                
                if(_this.indexSlider >= mainDiscoverSliders.length - 1){
                    _this.indexSlider = 0;
                } else {
                    _this.indexSlider++;
                }
    
                handleSlider();
            }, 4000);

        }

        mainDiscoderRight.onclick = () => {
            
            if(_this.indexSlider >= mainDiscoverSliders.length - 1){
                _this.indexSlider = 0;
            } else {
                _this.indexSlider++;
            }

            clearInterval(sliderAuto);
            handleSlider();

            sliderAuto = setInterval(() => {
    
                if(_this.indexSlider >= mainDiscoverSliders.length - 1){
                    _this.indexSlider = 0;
                } else {
                    _this.indexSlider++;
                }
    
                handleSlider();
            }, 4000);
        }

    },

    slidePersonalOption: function() {
        mainPersonalOptions.forEach((mainPersonalOption, index) => {
            mainPersonalOption.onclick = () => {
                mainOptionActive.style.left = `calc(3px + ${index * 20}%)`;

                if(index == 0){
                    bodyMusicAllSong.style.display = 'block';
                    bodyListMusic.style.display = 'none';
                    bodyPlaylist.style.display = 'none';
                    bodyContainer.style.display = 'none';
                } else if(index == 1){
                    bodyMusicAllSong.style.display = 'none';
                    bodyListMusic.style.display = 'block';
                    bodyPlaylist.style.display = 'none';
                    bodyContainer.style.display = 'none';
                } else if(index == 2){
                    bodyMusicAllSong.style.display = 'none';
                    bodyListMusic.style.display = 'none';
                    bodyPlaylist.style.display = 'block';
                    bodyContainer.style.display = 'none';
                } else if(index == 3){
                    bodyMusicAllSong.style.display = 'none';
                    bodyListMusic.style.display = 'none';
                    bodyPlaylist.style.display = 'none';
                    bodyContainer.style.display = 'block';
                } else {
                    bodyMusicAllSong.style.display = 'none';
                    bodyListMusic.style.display = 'none';
                    bodyPlaylist.style.display = 'none';
                    bodyContainer.style.display = 'none';
                }

            }
        })
    },

    renderSlideImgMusic: function() {

        const length = this.dataSongs.length;

        const html = this.dataSongs.map((song, index) => {
            return `
                <div class="container--music-all-img-item ${index == 0 ? 'container--music-all-img-item-first' : index == length - 1 ? 'container--music-all-img-item-second' : index == length - 2 ? 'container--music-all-img-item-third' : 'container--music-all-img-item-four'}" style="background-image: url('${song.img}');"></div>
            `;
        }).join('');

        musicImgList.innerHTML = html;

        //--------------
        const htmlMusicList = this.dataSongs.map((song, index) => {
            return `
                <div class="container--music-all-item">
                    <div class="container--music-all-item-info-wrapper">
                        <div class="container--music-all-item-img-wrapper">
                            <div class="container--music-all-item-img" style="background-image: url(${song.img});"></div>
                            <div class="container--music-all-item-img-icon"><i class="fa-solid fa-play"></i></div>
                        </div>
                        <div class="container--music-all-item-info">
                            <div class="container--music-all-item-name">${song.name}</div>
                            <div class="container--music-all-item-singer">${song.singer}</div>
                        </div>
                    </div>

                    <div class="container--music-all-item-option">
                        <div class="container--music-all-item-film">
                            <i class="fa-solid fa-film"></i>
                        </div>

                        <div class="container--music-all-item-micro">
                            <i class="fa-solid fa-microphone"></i>
                        </div>

                        <div class="container--music-all-item-favourite-wrapper">
                            <div class="container--music-all-item-favourite">
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <div class="container--music-all-item-no-favourite">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>

                        <div class="container--music-all-item-duration">
                            <div class="container--music-all-item-duration-time">${song.duration}</div>
                            <div class="container--music-all-item-duration-option"><i class="fa-solid fa-ellipsis"></i></div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');


        musicAllList.innerHTML = htmlMusicList;
        musicListSong.innerHTML = htmlMusicList;

    },

    slideUpMusicImg: function() {

        const musicAllImgs = $$('.container--music-all-img-item');
        const _this = this;
        const handleSlideImg = () => {

            $('.container--music-all-img-item.container--music-all-img-item-third').classList.remove('container--music-all-img-item-third');
            $('.container--music-all-img-item.container--music-all-img-item-second').classList.remove('container--music-all-img-item-second');
            $('.container--music-all-img-item.container--music-all-img-item-first').classList.remove('container--music-all-img-item-first');
            $$('.container--music-all-img-item.container--music-all-img-item-four').forEach(e => {
                e.classList.remove('container--music-all-img-item-four');
            })

            musicAllImgs[_this.indexSliderImg].classList.add('container--music-all-img-item-first');
            musicAllImgs[_this.indexSliderImg - 1 < 0 ? musicAllImgs.length - 1 : _this.indexSliderImg - 1].classList.add('container--music-all-img-item-second');
            musicAllImgs[_this.indexSliderImg - 2 == -1 ? musicAllImgs.length - 1 : _this.indexSliderImg - 2 == -2 ? musicAllImgs.length - 2 : _this.indexSliderImg - 2].classList.add('container--music-all-img-item-third');


            musicAllImgs.forEach((musicAllImg, index) => {
                if(index != _this.indexSliderImg && index != _this.indexSliderImg - 1 && index != _this.indexSliderImg - 2) {
                    musicAllImg.classList.add('container--music-all-img-item-four');
                }
            });

            if(_this.indexSliderImg - 1 == -1){
                musicAllImgs[musicAllImgs.length - 1].classList.remove('container--music-all-img-item-four');
                musicAllImgs[musicAllImgs.length - 2].classList.remove('container--music-all-img-item-four');
            } else if(_this.indexSliderImg - 2 == -1){
                musicAllImgs[musicAllImgs.length - 1].classList.remove('container--music-all-img-item-four');
            }


        }

        const slideImg = setInterval(() => {
            
            if(_this.indexSliderImg === 0){
                _this.indexSliderImg = musicAllImgs.length - 1;
            } else {
                _this.indexSliderImg--;
            }

            handleSlideImg();
        }, 4000);

    },

    renderListMusicZing: function() {

        const htmlListZing = this.dataSongs.map((song, index) => {
            if(index < this.zingRank){
                return `
                    <div class="container--music-all-item">
                        <div class="zing-container--music-all-item-rank-wrapper">
                            <span class="zing-container--music-all-item-rank zing-container--music-all-item-rank-${index + 1}">${index + 1}</span>
                            <span class="zing-container--music-all-item-line">-</span>
                        </div>
                        <div class="container--music-all-item-info-wrapper">
                            <div class="container--music-all-item-img-wrapper">
                                <div class="container--music-all-item-img" style="background-image: url(${song.img});"></div>
                                <div class="container--music-all-item-img-icon"><i class="fa-solid fa-play"></i></div>
                            </div>
                            <div class="container--music-all-item-info">
                                <div class="container--music-all-item-name">${song.name}</div>
                                <div class="container--music-all-item-singer">${song.singer}</div>
                            </div>
                        </div>

                        <div class="container--music-all-item-option">
                            <div class="container--music-all-item-film">
                                <i class="fa-solid fa-film"></i>
                            </div>

                            <div class="container--music-all-item-micro">
                                <i class="fa-solid fa-microphone"></i>
                            </div>

                            <div class="container--music-all-item-favourite-wrapper">
                                <div class="container--music-all-item-favourite">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                <div class="container--music-all-item-no-favourite">
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                            </div>

                            <div class="container--music-all-item-duration">
                                <div class="container--music-all-item-duration-time">${song.duration}</div>
                                <div class="container--music-all-item-duration-option"><i class="fa-solid fa-ellipsis"></i></div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }).join('');

        musicListZing.innerHTML = htmlListZing;
    },

    renderRank: function() {

        const htmlRank = this.dataSongs.map((song, index) => {
            if(index < 5){
                return `
                    <div class="container--music-all-item">
                        <div class="zing-container--music-all-item-rank-wrapper">
                            <span class="zing-container--music-all-item-rank zing-container--music-all-item-rank-${index + 1}">${index + 1}</span>
                            <span class="zing-container--music-all-item-line">-</span>
                        </div>
                        <div class="container--music-all-item-info-wrapper">
                            <div class="container--music-all-item-img-wrapper">
                                <div class="container--music-all-item-img" style="background-image: url(${song.img});"></div>
                                <div class="container--music-all-item-img-icon"><i class="fa-solid fa-play"></i></div>
                            </div>
                            <div class="container--music-all-item-info">
                                <div class="container--music-all-item-name">${song.name}</div>
                                <div class="container--music-all-item-singer">${song.singer}</div>
                            </div>
                        </div>

                        <div class="container--music-all-item-option">
                            <div class="container--music-all-item-film">
                                <i class="fa-solid fa-film"></i>
                            </div>

                            <div class="container--music-all-item-micro">
                                <i class="fa-solid fa-microphone"></i>
                            </div>

                            <div class="container--music-all-item-favourite-wrapper">
                                <div class="container--music-all-item-favourite">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                <div class="container--music-all-item-no-favourite">
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                            </div>

                            <div class="container--music-all-item-duration">
                                <div class="container--music-all-item-duration-time">${song.duration}</div>
                                <div class="container--music-all-item-duration-option"><i class="fa-solid fa-ellipsis"></i></div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }).join('');

        zingRankVie.innerHTML = htmlRank;
        zingRankUs.innerHTML = htmlRank;
        zingRankK.innerHTML = htmlRank;
    },

    renderMainSong: function() {

        let htmlListSong = this.dataSongs.map((song, index) => {
            if(index <= this.currentIndex) {
                return `
                    <div class="container--music-all-item ${index === this.currentIndex ? 'active' : ''}" data-index=${index}>
                        <div class="container--music-all-item-info-wrapper">
                            <div class="container--music-all-item-img-wrapper">
                                <div class="container--music-all-item-img" style="background-image: url(${song.img});"></div>
                                <div class="container--music-all-item-img-icon">
                                    <i class="fa-solid fa-play"></i>
                                    <img src="./assets/img/icon-playing.gif" alt="" class="container--music-all-item-img-icon-play">
                                </div>
                            </div>
                            <div class="container--music-all-item-info">
                                <div class="container--music-all-item-name">${song.name}</div>
                                <div class="container--music-all-item-singer">${song.singer}</div>
                            </div>
                        </div>
    
                        <div class="container--music-all-item-option">
    
                            <div class="container--music-all-item-favourite-wrapper">
                                <div class="container--music-all-item-favourite">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                <div class="container--music-all-item-no-favourite">
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                            </div>
    
                            <div class="container--music-all-item-duration">
                                <div class="container--music-all-item-duration-time">${song.duration}</div>
                                <div class="container--music-all-item-duration-option"><i class="fa-solid fa-ellipsis"></i></div>
                            </div>
    
                        </div>
                    </div>
                `;
            }

        }).join('');


        if(this.isRandom) {
            htmlListSong = this.dataSongs.map((song, index) => {
                return `
                        <div class="container--music-all-item ${index === this.currentIndex ? 'active' : ''}" data-index=${index}>
                            <div class="container--music-all-item-info-wrapper">
                                <div class="container--music-all-item-img-wrapper">
                                    <div class="container--music-all-item-img" style="background-image: url(${song.img});"></div>
                                    <div class="container--music-all-item-img-icon">
                                        <i class="fa-solid fa-play"></i>
                                        <img src="./assets/img/icon-playing.gif" alt="" class="container--music-all-item-img-icon-play">
                                    </div>
                                </div>
                                <div class="container--music-all-item-info">
                                    <div class="container--music-all-item-name">${song.name}</div>
                                    <div class="container--music-all-item-singer">${song.singer}</div>
                                </div>
                            </div>
        
                            <div class="container--music-all-item-option">
        
                                <div class="container--music-all-item-favourite-wrapper">
                                    <div class="container--music-all-item-favourite">
                                        <i class="fa-solid fa-heart"></i>
                                    </div>
                                    <div class="container--music-all-item-no-favourite">
                                        <i class="fa-regular fa-heart"></i>
                                    </div>
                                </div>
        
                                <div class="container--music-all-item-duration">
                                    <div class="container--music-all-item-duration-time">${song.duration}</div>
                                    <div class="container--music-all-item-duration-option"><i class="fa-solid fa-ellipsis"></i></div>
                                </div>
        
                            </div>
                        </div>
                    `;
            }).join('');
    
            mainSongNext.innerHTML = '<div class="container--music-all-item-title-notification">Random thì đâu cần biết bài tiếp theo đâu nhỉ!</div>';    


        } else {
            const htmlListSongNext = this.dataSongs.map((song, index) => {
                if(index > this.currentIndex) {
                    return `
                        <div class="container--music-all-item ${index === this.currentIndex ? 'active' : ''}" data-index=${index}>
                            <div class="container--music-all-item-info-wrapper">
                                <div class="container--music-all-item-img-wrapper">
                                    <div class="container--music-all-item-img" style="background-image: url(${song.img});"></div>
                                    <div class="container--music-all-item-img-icon">
                                        <i class="fa-solid fa-play"></i>
                                        <img src="./assets/img/icon-playing.gif" alt="" class="container--music-all-item-img-icon-play">
                                    </div>
                                </div>
                                <div class="container--music-all-item-info">
                                    <div class="container--music-all-item-name">${song.name}</div>
                                    <div class="container--music-all-item-singer">${song.singer}</div>
                                </div>
                            </div>
        
                            <div class="container--music-all-item-option">
        
                                <div class="container--music-all-item-favourite-wrapper">
                                    <div class="container--music-all-item-favourite">
                                        <i class="fa-solid fa-heart"></i>
                                    </div>
                                    <div class="container--music-all-item-no-favourite">
                                        <i class="fa-regular fa-heart"></i>
                                    </div>
                                </div>
        
                                <div class="container--music-all-item-duration">
                                    <div class="container--music-all-item-duration-time">${song.duration}</div>
                                    <div class="container--music-all-item-duration-option"><i class="fa-solid fa-ellipsis"></i></div>
                                </div>
        
                            </div>
                        </div>
                    `;
                }
            }).join('');
    
            mainSongNext.innerHTML = htmlListSongNext || '<div class="container--music-all-item-title-notification">Hết nhạc rồi bạn ơi! HAHAHA</div>';    

        }

        mainSong.innerHTML = htmlListSong;

    },

    eventHandle: function() {
        const _this = this;

        togglePlay.onclick = () => {
            
            if(_this.isPlay){
                _this.isPlay = false;
                audio.pause();
            } else {
                const temp = _this.currentIndex;
                _this.isPlay = true;
                _this.currentIndex = _this.currentIndex == -1 ? 0 : _this.currentIndex;
                _this.renderMainSong();
                if(temp == -1){
                    _this.loadCurrentSong();
                }
                rootStyle.setProperty('--music-control-height', "90px");
                audio.play();
            }
        }

        controlFavourite.onclick = () => {
            controlFavourite.style.display = 'none';
            controlNoFavourite.style.display = 'block';
        }

        controlNoFavourite.onclick = () => {
            controlFavourite.style.display = 'block';
            controlNoFavourite.style.display = 'none';
        }

        zingViewAdd.onclick = () => {
            _this.zingRank = 10;
            this.renderListMusicZing();
            zingViewAdd.style.display = 'none';
            zingHideMusic.style.display = 'block';
        }

        zingHideMusic.onclick = () => {
            _this.zingRank = 5;
            this.renderListMusicZing();
            zingViewAdd.style.display = 'block';
            zingHideMusic.style.display = 'none';
        }



        // Lắng nghe hành vi click vào song
        mainSongBox.onclick = (e) => {
            const songNode = e.target.closest('.container--music-all-item:not(.active)');

            const songActive = e.target.closest('.container--music-all-item.active');
            if(songActive && !e.target.closest('.container--music-all-item-option')){
                songActive.onclick = () => {
                    if(_this.isPlay){
                        audio.pause();
                    } else {
                        audio.play();
                    }
                    
                    _this.renderMainSong();
                }

                songActive.click();
            }

            if(songNode || e.target.closest('.container--music-all-item-option')){
                //Xử lí khi click vào song
                if(songNode && !e.target.closest('.container--music-all-item-option')) {
                    
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.renderMainSong();
                    _this.loadCurrentSong();
                    rootStyle.setProperty('--music-control-height', "90px");
                    audio.play();

                }


                if(e.target.closest('.container--music-all-item-option')){
                    const favourites = $$('.container--music-all-item-favourite');
                    const noFavourites = $$('.container--music-all-item-no-favourite');
                    
                    favourites.forEach((favourite, index) => {
                        favourite.onclick = () => {
                            favourites[index].style.display = 'none';
                            noFavourites[index].style.display = 'block';
                        }
                    })
                    
                    noFavourites.forEach((noFavourite, index) => {
                        noFavourite.onclick = () => {
                            noFavourites[index].style.display = 'none';
                            favourites[index].style.display = 'block';
                        }
                    })
                }


            }
        }

        const cdThumbAnimate = cdthumb.animate([
            {transform: 'rotate(360deg'}
        ], {
            duration: 10000,
            iterations: Infinity,
        })

        const cdThumbAnimateModal = cdthumbModal.animate([
            {transform: 'rotate(360deg'}
        ], {
            duration: 10000,
            iterations: Infinity,
        })

        cdThumbAnimate.pause();
        cdThumbAnimateModal.pause();

        playBtnModal.onclick = () => {
            if(_this.isPlay){
                audio.pause();
            } else {
                audio.play();
            }
        }

        playBtn.onclick = () => {
            if(_this.isPlay){
                audio.pause();
            } else {
                audio.play();
            }
        }

        audio.onplay = () => {
            _this.isPlay = true;
            main.classList.add('play');
            cdThumbAnimate.play();
            cdThumbAnimateModal.play();
            mainControlWrapper.style.transform = 'translateX(20px)';
        }

        audio.onpause = () => {
            _this.isPlay = false;
            main.classList.remove('play');
            cdThumbAnimate.pause();
            cdThumbAnimateModal.pause();
            mainControlWrapper.style.transform = 'translateX(0px)';
        }

        audio.ontimeupdate = () => {
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progressModal.value = progressPercent;
                progress.value = progressPercent;
                progressLine.style.width = progressPercent + '%';
                progressLineModal.style.width = progressPercent + '%';
                timeLeft.textContent = _this.timeFormat(audio.currentTime);
                timeLeftModal.textContent = _this.timeFormat(audio.currentTime);
            }
        }

        progress.oninput = (e) => {
            progressLine.style.width = e.target.value + '%';
            progressLineModal.style.width = e.target.value + '%';
            const seektime = e.target.value / 100 * audio.duration;
            audio.currentTime = seektime;
            timeLeft.textContent = _this.timeFormat(audio.currentTime);
            timeLeftModal.textContent = _this.timeFormat(audio.currentTime);
        }
        
        progressModal.oninput = (e) => {
            progressLine.style.width = e.target.value + '%';
            progressLineModal.style.width = e.target.value + '%';
            const seektime = e.target.value / 100 * audio.duration;
            audio.currentTime = seektime;
            timeLeft.textContent = _this.timeFormat(audio.currentTime);
            timeLeftModal.textContent = _this.timeFormat(audio.currentTime);
        }

        nextBtnModal.onclick = (e) => {
            if(_this.isRandom){
                _this.playRandomSong()
            } else {
                _this.nextSong();
            }


            audio.play();
            _this.renderMainSong();
            _this.scrollToActiveSong();

        }

        nextBtn.onclick = (e) => {
            if(_this.isRandom){
                _this.playRandomSong()
            } else {
                _this.nextSong();
            }


            audio.play();
            _this.renderMainSong();
            _this.scrollToActiveSong();

        }

        prevBtnModal.onclick = (e) => {
            if(_this.isRandom){
                _this.playRandomSong()
            } else {
                _this.prevSong();
            }

            audio.play();
            _this.renderMainSong();
            _this.scrollToActiveSong();
        }

        prevBtn.onclick = (e) => {
            if(_this.isRandom){
                _this.playRandomSong()
            } else {
                _this.prevSong();
            }

            audio.play();
            _this.renderMainSong();
            _this.scrollToActiveSong();
        }

        randomBtn.onclick = (e) => {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active', _this.isRandom);
            randomBtnModal.classList.toggle('active', _this.isRandom);
            _this.renderMainSong();
        }

        randomBtnModal.onclick = (e) => {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active', _this.isRandom);
            randomBtnModal.classList.toggle('active', _this.isRandom);
            _this.renderMainSong();
        }

        repeatBtn.onclick = (e) => {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle('active', _this.isRepeat);
            repeatBtnModal.classList.toggle('active', _this.isRepeat);
        }

        repeatBtnModal.onclick = (e) => {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle('active', _this.isRepeat);
            repeatBtnModal.classList.toggle('active', _this.isRepeat);
        }

        audio.onended = (e) => {
            if(_this.isRepeat){
                audio.play();
            } else {
                nextBtn.click();
            }
        }
        
        sound.oninput = function(e){
            const seekVolume = e.target.value / 100;
            audio.volume = seekVolume;

            volumeIcons.forEach(volumeIcon => {
                volumeIcon.classList.remove('active');
            });

            if(e.target.value == 0){
                volumeIcons[0].classList.add('active');
            } else if(e.target.value <= 50){
                volumeIcons[1].classList.add('active');
            } else {
                volumeIcons[2].classList.add('active');
            }
        }

        volumeBtn.onclick = function() {
            if(sound.value >= 50){
                sound.value = 0;
            } else {
                sound.value = 60;
            }

            const seekVolume = sound.value / 100;
            audio.volume = seekVolume;

            volumeIcons.forEach(volumeIcon => {
                volumeIcon.classList.remove('active');
            });

            if(sound.value == 0){
                volumeIcons[0].classList.add('active');
            } else if(sound.value <= 50){
                volumeIcons[1].classList.add('active');
            } else {
                volumeIcons[2].classList.add('active');
            }
        }

        closeModalMusic.onclick = () => {
            modalMusic.style.top = '100vh';
        }

        controlMusic.onclick = (e) => {
            if(e.target.closest('.main-control-song-music-wrapper') && !e.target.closest('.main-control-song-music-option-wrapper')){
                modalMusic.style.top = '0';
            }
        }

    },

    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.dataSongs.length){
            this.currentIndex = 0;
        }

        this.loadCurrentSong();
    },

    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0){
            this.currentIndex = this.dataSongs.length - 1;
        }

        this.loadCurrentSong();
    },

    playRandomSong: function() {
        let newIndex;
        do{
            newIndex = Math.floor(Math.random() * this.dataSongs.length);
        } while(newIndex === this.currentIndex || this.arraySong.includes(newIndex));

        this.arraySong.push(newIndex);
        this.currentIndex = newIndex;

        this.loadCurrentSong();

        console.log(this.arraySong, this.currentIndex);

        if(this.arraySong.length === this.dataSongs.length){
            this.arraySong = [];
        }

    },

    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.container--music-all-item.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }, 200);
    },

    timeFormat: function (duration) {
        let durationTimeSong = Math.floor(duration);
        let durationMinuteSong = Math.floor(durationTimeSong / 60);
        let durationSecondSong = durationTimeSong % 60;
        let a = durationMinuteSong < 10 ? `0${durationMinuteSong}` : `${durationMinuteSong}`;
        let b = durationSecondSong < 10 ? `0${durationSecondSong}` : `${durationSecondSong}`;

        return `${a}:${b}`;
    },

    loadCurrentSong: function() {

        mainControlImg.style.backgroundImage = `url('${this.currentSong.img}')`;
        mainControlName.textContent = this.currentSong.name;
        mainControlSinger.textContent = this.currentSong.singer;
        mainControlDuration.textContent = this.currentSong.duration;
        
        mainControlImgModal.style.backgroundImage = `url('${this.currentSong.img}')`;
        mainControlNameModal.textContent = this.currentSong.name;
        mainControlSingerModal.textContent = this.currentSong.singer;
        mainControlDurationModal.textContent = this.currentSong.duration;

        progressLine.style.width = 0 + '%';
        progressLineModal.style.width = 0 + '%';
        progress.value = 0;
        progressModal.value = 0;
        timeLeft.textContent = this.timeFormat(0);
        timeLeftModal.textContent = this.timeFormat(0);

        audio.src = this.currentSong.pathSong;

    },


    start: function() {

        this.defineProperties();

        this.renderSlideImgMusic();

        this.renderListMusicZing();

        this.renderMainSong();

        this.renderRank();

        this.eventHandle();

        this.applyTheme();

        this.mainSlider();

        this.slideUpMusicImg();

        this.routeSidebar();

        this.slidePersonalOption();

    }
}


app.start();
