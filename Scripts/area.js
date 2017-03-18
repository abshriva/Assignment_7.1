function AreaOfCircle(radius)
{
    this.radius = radius;
    // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
}

var c = new AreaOfCircle(7);

console.log('AreaOfCircle:'+Math.round(c.area()));