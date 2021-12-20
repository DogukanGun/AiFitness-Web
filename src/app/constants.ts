export class constants{
    // header
    readonly APP_NAME = "AI Fitness Assistant";
    readonly MENU_ITEMS = [new Item("Home","header"), 
                           new Item("How it works","slider"), 
                           new Item("Screenshots","slider"), 
                           new Item("Developers","outer_developers"),
                           new Item("Contact us","container"), 
                           new Item("Download","download")];
    readonly UPPER_LOGO_NAME = "upperbarlogo.svg"
    readonly UPPER_LOGO_PATH = "../../../assets/"+this.UPPER_LOGO_NAME;

    // footer
    readonly COPYRIGHT_NAME = "aifitnessasistant.com © 2021";
    readonly FOOTER_LOGOS = [new Item("fab fa-github",""),
                             new Item("fab fa-linkedin",""),
                             new Item("fab fa-twitter",""),
                             new Item("fab fa-facebook","")];
    readonly FOOTER_MENU_ITEMS = [new Item("Contact",""),
                                  new Item("About",""),
                                  new Item("Cookies",""),
                                  new Item("Privacy",""),
                                  new Item("Pricing",""),
                                  new Item("Home","")];

    // download
    readonly DOWNLOAD_ANDRIOD_NAME = "download-google_play-button.png";
    readonly DOWNLOAD_ANDRIOD_PATH = "../../../assets/"+this.DOWNLOAD_ANDRIOD_NAME;
    readonly DOWNLOAD_ANDRIOD_HREF = "";
    readonly DOWNLOAD_IOS_NAME = "download-appstore-button.png";
    readonly DOWNLOAD_IOS_PATH = "../../../assets/"+this.DOWNLOAD_IOS_NAME;
    readonly DOWNLOAD_IOS_HREF = "";

    // main menu
    readonly MAIN_IMAGE_NAME = "home_background.jpg";
    readonly MAIN_IMAGE_PATH = "../../assets/"+this.MAIN_IMAGE_NAME;
    readonly SLOGAN = "Feed off the power of artificial intelligence";

    // developers
    readonly PERSONS = [new Person("Alper","Temel","Researcher & Developer","../../../assets/img_avatar.png",
                        ["","",""]),
                        new Person("Dogukan Ali","Gundogan","Researcher & Developer","../../../assets/img_avatar.png",
                        ["","",""]),
                        new Person("Ezgi","Cetinkaya","Researcher & Developer","../../../assets/img_avatar2.png",
                        ["","",""])];
    readonly DEVELOPERS_LOGOS = ["fas fa-globe","fab fa-linkedin","fas fa-envelope"];

    // contact
    readonly CONTACT_TEXT_TITLE = "Keep in Touch";
    readonly CONTACT_TEXT_NAME = "My name is";
    readonly CONTACT_TEXT_EMAIL = "My e-mail is";
    readonly CONTACT_TEXT_NUMBER = "My number is";
    readonly CONTACT_TEXT_DES = "I'd like to chat about";
    readonly CONTACT_TEXT_SEND_MSG = "Send Message";
    readonly CONTACT_SHOW_LOGO = true;

    // corousel-slider
    readonly SLIDER_ITEMS = [new Image("../../../assets/iphone2.png",
                                       "This app provides you some workouts and practice safe. Stay hit from the comfort of your home.",
                                       "BECOME A PIONEER OF REVOLUTIONARY AI TECHNOLOGY"),
                             new Image("../../../assets/İPHONEApp.PNG",
                                       "During an exercise, an AI Fitness Asisstant can detect incorrect posture. App uses artificial intelligence to develop personalized training programs for each user.",
                                       "Get a real time feedback of your workout via mobile application.")];
}

// For header
interface Menu_item{
    name: string;
    href: string;
};
class Item implements Menu_item{
    name = "";
    href = "";
    constructor(name: string, href: string){this.name = name;this.href = href;}
}

// For developers

interface Person_item{
    name: string;
    surname: string;
    title: string;
    img_path: string;
    hrefs: Array<string>; // left to right links bottom of persons
  };
  class Person implements Person_item{
    name = "";
    surname = "";
    title = "";
    img_path = "";
    hrefs = ["","",""];
    constructor(name: string, surname: string, title: string, img_path: string, hrefs: Array<string>)
    {this.name = name;this.surname = surname;this.title = title;this.img_path = img_path;this.hrefs = hrefs;}
  }

  // For Corousel-slider

  interface image_item{
    image_path: string;
    description: string;
    header: string;
  };
  class Image implements image_item{
    image_path = "";
    header = "";
    description = "";
    constructor(image_path: string, description: string, header: string){this.image_path = image_path;
                this.description = description;this.header=header}
  }