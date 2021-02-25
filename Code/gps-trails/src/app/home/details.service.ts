import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class DetailServiceClass {

    detailComponentEmitter: EventEmitter<string> = new EventEmitter<string>();

    emitItemSelected(stringselected: string) {
        this.detailComponentEmitter.emit(stringselected);
    }
    parklist: {
        id: number, parkname: string, imgurl: string, parkDesc: string,
        lat1: number, lng1: number
    }[] = [
            {
                "id": 0, parkname: "Yosemite National Park",
                imgurl: "https://www.nationalgeographic.com/content/dam/travel/2019-digital/yosemite-guide/yosemite-national-park-california.jpg"
                , parkDesc: "Beautiful destination in the world attracts speople all round the world", lat1: 37.8651, lng1: 119.5383
            },
            { "id": 1, parkname: "Acadia", imgurl: "https://www.apple.com/newsroom/images/product/services/lifestyle/ApplePay-and-AppleWatch-celebrate-americas-national-parks-08232018_big.jpg.large.jpg", parkDesc: "Located in the Silicon valley of United States..", lat1: 12.44, lng1: 34.23 },
            { "id": 2, parkname: "Arches", imgurl: "https://studybreaks.com/wp-content/uploads/2017/07/shutterstock_142351951.jpg", parkDesc: "Beautiful destination in the world attracts speople all round the world", lat1: 14.271, lng1: 170.1322 },
            { "id": 3, parkname: "Badlands", imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/BadlandsView3.jpg/400px-BadlandsView3.jpg", parkDesc: "Beautiful destination in the world attracts speople", lat1: 102.33, lng1: 43.85 },

        ];

}