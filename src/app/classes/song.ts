/**
 * One of the first things that may strike you about the example is that the constructor parameters are
not mapped to member variables. If you prefix a constructor parameter with an access modifier, such as
private, it will automatically be mapped for you. You can refer to these constructor parameters as if they
were declared as properties on the class; for example, this.title, can be used anywhere within the Song
class to obtain the song title on that instance.
 */

export class Song {
    constructor(private artist: string, private title: string) {
    }

    play(): string {
        return 'Playing ' + this.title + ' by ' + this.artist;
    }
}
