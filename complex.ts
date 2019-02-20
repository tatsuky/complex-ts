
export class Complex {

  // Real part
  private _real: number;

  // Imaginary part
  private _imag: number;

  // Radius
  private _radius: number;

  // Argument
  private _arg: number;

  constructor (params: any) {
    const properties = this.calcProperties(params);
    this._real    = properties.real;
    this._imag    = properties.imag;
    this._radius  = properties.radius;
    this._arg     = properties.arg;
  }

  /**
   * Get/Set settings for _real
   */
  get real (): number {
    return this._real;
  }

  set real (newReal: number) {
    const properties = this.calcProperties({real: newReal, imag: this._imag});
    this._real    = properties.real;
    this._imag    = properties.imag;
    this._radius  = properties.radius;
    this._arg     = properties.arg;
  }

  /**
   * Get/Set settings for _imag
   */
  get imag (): number {
    return this._imag;
  }

  set imag (newImag: number) {
    const properties = this.calcProperties({real: this._real, imag: newImag});
    this._real    = properties.real;
    this._imag    = properties.imag;
    this._radius  = properties.radius;
    this._arg     = properties.arg;
  }

  /**
   * Get/Set settings for _radius
   */
  get radius (): number {
    return this._radius;
  }

  set radius (newRadius: number) {
    const properties = this.calcProperties({radius: newRadius, arg: this._arg});
    this._real    = properties.real;
    this._imag    = properties.imag;
    this._radius  = properties.radius;
    this._arg     = properties.arg;
  }

  /**
   * Get/Set settings for _arg
   */
  get arg (): number {
    return this._arg;
  }

  set arg (newArg: number) {
    const properties = this.calcProperties({radius: this._radius, arg: newArg});
    this._real    = properties.real;
    this._imag    = properties.imag;
    this._radius  = properties.radius;
    this._arg     = properties.arg;
  }

  /**
   * Calculates property values from the given parameters.
   * @param params parameters (either {real;imag} or {radius;arg}.)
   */
  private calcProperties (params: any): ComplexProperties {
    let real: number;
    let imag: number;
    let radius: number;
    let arg: number;

    // Update values with an Euclidean coordinate
    if ('real' in params && 'imag' in params) {
      real = params.real;
      imag = params.imag;
      radius = Math.sqrt(real ** 2 + imag ** 2);
      arg = Math.atan2(params.imag, params.real);
    }

    // Update values from a polar coordinate
    else if ('radius' in params && 'arg' in params) {
      real = params.radius * Math.cos(params.arg);
      imag = params.radius * Math.sin(params.arg);
      radius = params.radius;
      arg = params.arg;
    }

    else {
      throw Error('{real;imag} or {radius;arg} is needed to initialize a complex object.');
    }

    return {
      real: real,
      imag: imag,
      radius: radius,
      arg: arg
    }
  }

  /**
   * Conjugates the complex number.
   */
  public conjugate (): Complex {
    return new Complex({real: this._real, imag: -this._imag});
  }

  /**
   * Calculates the absolute value of the complex number;
   */
  public absolute (): number {
    const abs = this._real ** 2 + this._imag ** 2;
    return Math.sqrt(abs);
  }

  /**
   * Swaps the real part and the imaginary part.
   */
  public swap (): Complex {
    return new Complex({real: this._imag, imag: this._real});
  }

  /**
   * Adds a complex number.
   * @param c Complex number to add
   */
  public add (c: Complex): Complex {
    const real = this._real + c.real;
    const imag = this._imag + c.imag;
    return new Complex({real: real, imag: imag});
  }

  /**
   * Subtracts a complex number.
   * @param c Complex number to subtract
   */
  public subtract (c: Complex): Complex {
    const real = this._real - c.real;
    const imag = this._imag - c.imag;
    return new Complex({real: real, imag: imag});
  }

  /**
   * Multiplies a complex number.
   * @param c Complex number to multiply
   */
  public multiply (c: Complex): Complex {
    const real = this._real * c.real - this._imag * c.imag;
    const imag = this._real * c.imag + this._imag * c.real;
    return new Complex({real: real, imag: imag});
  }

  /**
   * Divides a complex number.
   * @param c Complex number to devide by.
   */
  public divide (c: Complex): Complex {
    const cc = c.real ** 2;
    const dd = c.imag ** 2;
    const product = this.multiply(c.conjugate());
    const real = product.real / (cc + dd);
    const imag = product.imag / (cc + dd);
    return new Complex({real: real, imag: imag});
  }

  /**
   * Converts the complex number to a string.
   * @param unit Imaginary unit ('i' or 'j').
   */
  public toString (unit: string = 'i'): string {
    if (this._imag >= 0) {
      return `${this._real} + ${unit}${this._imag}`;
    } else {
      return `${this._real} + ${unit}${-this._imag}`;
    }
  }

  /**
   * Converts the complex number to an array ([real, imag] format).
   */
  public toArray (): [number, number] {
    return [this._real, this._imag];
  }

  /**
   * Copies the complex number object.
   */
  public copy (): Complex {
    return new Complex({real: this._real, imag: this._imag});
  }

}

interface ComplexProperties {
  real: number
  imag: number
  radius: number
  arg: number
}