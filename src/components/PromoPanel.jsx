import womanWithLaptop from '../assets/promo-woman.png';


export default function PromoPanel({ heading = 'Very good works are waiting for you Sign up Now', imageSrc = womanWithLaptop }) {
  return (
    <div
      className="absolute overflow-hidden rounded-[15px]"
      style={{ width: 619, height: 784, top: 20, left: 640, background: '#6E39CB' }}
    >
      <div
        className="absolute z-10"
        style={{
          width: 374,
          height: 144,
          top: 124,
          left: 60,
          fontFamily: 'Lato, sans-serif',
          fontWeight: 700,
          fontSize: 40,
          lineHeight: '110%',
          letterSpacing: '5%',
          color: '#FFFFFF',
        }}
      >
        {heading}
      </div>

      {/* Vertical accent line, directly under the heading text */}
      <div className="absolute z-10 bg-white" style={{ width: 1, height: 180, top: 300, left: 60 }} />

      {/* Image sits behind text/lines — expects a transparent-background PNG cutout, per reference screenshot */}
      <div
        className="absolute z-0 overflow-hidden"
        style={{ width: 619, height: 615.7981567382812, top: 168.2, left: 0 }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Promo illustration"
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'bottom', transform: 'translateX(70px) rotate(0deg)', opacity: 1 }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-white/60">
            Drop your Figma-exported image here (imageSrc prop)
          </div>
        )}
      </div>

      {/* Horizontal accent line, bottom-left of the panel */}
      <div className="absolute z-10 bg-white" style={{ width: 64, height: 1, bottom: 24, left: 60 }} />
    </div>
  );
}
