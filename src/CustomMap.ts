export class CustomMap {
    private googleMap: google.maps.Map

    constructor(divId: string) {
        const portalMap = document.getElementById(divId)!;
        this.googleMap = new google.maps.Map(portalMap, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

}
