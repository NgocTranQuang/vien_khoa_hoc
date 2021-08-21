
export interface TestimonialsDTO {
    title: string,
    avatarURL: string,
    name: string,
    position: string
}
var item1 = {
    title: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.",
    avatarURL: "http://gonthemes.info/eschool/wp-content/uploads/2018/10/team_member1-100x100.jpg",
    name: "MARIA HELY",
    position: "Customer"
}
var item2 = {
    title: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.",
    avatarURL: "http://gonthemes.info/eschool/wp-content/uploads/2018/10/team_member2-100x100.jpg",
    name: "JANE DOE",
    position: "Manager of AZ"
}

var item3 = {
    title: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.",
    avatarURL: "http://gonthemes.info/eschool/wp-content/uploads/2018/10/team_member3-100x100.jpg",
    name: "MICHEL HANA",
    position: "Ceo of AZ"
}

var slideList: TestimonialsDTO[] = [item1, item2, item3]


export default slideList;