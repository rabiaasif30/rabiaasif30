document.addEventListener("DOMContentLoaded", function () {
    // get the button element
    var button = document.querySelector("button");


    button.addEventListener("click", function () {
        //random URLs
        var randomUrls = [
            "http://chihuahuaspin.com/",
            "http://www.amialright.com/",
            "https://twitter.com/gilfo4le/status/171867808965010660",
            "http://www.patience-is-a-virtue.org/",
            "https://www.reddit.com/r/programmingmemes/comments/17m32ox/for_the_last_time_they_arent_the_same/",
            "https://www.reddit.com/r/ProgrammerHumor/comments/17lzw1v/theonlyreasonnottoshare/",
            "https://www.instagram.com/p/C0d0qEiprfm/",
            "https://www.reddit.com/r/dndmemes/comments/16f6un1/all_because_im_too_lazy_to_study_all_of_the/?utm_source=share&utm_medium=web2x&context=3",
            "https://www.reddit.com/r/dndmemes/comments/16914j3/if_the_dm_doesnt_ask_for_it_the_roll_is_wasted/?utm_source=share&utm_medium=web2x&context=3",
            "https://www.reddit.com/r/dndmemes/comments/165c95i/just_one_more_couldnt_hurt/?utm_source=share&utm_medium=web2x&context=3",
            "https://www.reddit.com/r/dndmemes/comments/16gwp6b/you_died/?utm_source=share&utm_medium=web2x&context=3",

        ];

        // get random URL
        var randomIndex = Math.floor(Math.random() * randomUrls.length);

        var randomUrl = randomUrls[randomIndex];
        
        // redirect
        window.location.href = randomUrl;
    });
});
