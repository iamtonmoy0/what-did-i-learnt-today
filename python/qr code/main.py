import qrcode as qr

image = qr.make("https://www.google.com")

image.save("img.png")
