class Tracked {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        let history = [createVector(this.x, this.y)];
    }

    show() {
        push();
        rectMode(CENTER);
        noStroke();
        fill(255, random(0, 255));
        rect(this.x, this.y, random(5, 100), random(5, 100));
        pop();
    }

    move() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
        for (let h in history) {
            if (h !== undefined) {
                this.history.push(createVector(this.x, this.y));
            }
        }
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
}