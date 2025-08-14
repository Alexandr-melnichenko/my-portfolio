import nodemailer from 'nodemailer';

export default async (req, res) => {
  const body = new URLSearchParams(req.body);

  const name = body.get('name');
  const email = body.get('email');
  const phone = body.get('phone');
  const message = body.get('message');

  // 2. Валидация данных (простая проверка)
  if (!name || !email || !message) {
    return res.status(400).send('Fill all required areas!');
  }

  // 3. Настройка SMTP-транспорта (используем Nodemailer)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 4. Создание объекта письма
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'alexandr.melnichenko@gmail.com',
    subject: `Нове повідомлення з лендінгу портфоліо від ${name}`,
    html: `
    <p><b>Імʼя:</b> ${name}</p>
    <p><b>Пошта:</b> ${email}</p>
    <p><b>Телефон:</b> ${phone}</p>
    <p><b>Повідомлення:</b> ${message}</p>
`,
  };

  // 5. Отправка письма
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Повідомлення успішно відправлено!');
  } catch (error) {
    console.error('Помилка при відправленні:', error);
    res.status(500).send('Помилка серверу. Спробуйте пізніше.');
  }
};
