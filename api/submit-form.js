import nodemailer from 'nodemailer';

export default async (req, res) => {
  //   const body = new URLSearchParams(req.body);

  //   const name = body.get('name');
  //   const email = body.get('email');
  //   const phone = body.get('phone');
  //   const message = body.get('message');

  const { user_name, user_email, user_phoneNumber, user_message } = req.body;

  // 2. Валидация данных (простая проверка)
  if (!user_name || !user_email || !user_message) {
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
    subject: `Нове повідомлення з лендінгу портфоліо від ${user_name}`,
    html: `
    <p><b>Імʼя:</b> ${user_name}</p>
    <p><b>Пошта:</b> ${user_email}</p>
    <p><b>Телефон:</b> ${user_phoneNumber}</p>
    <p><b>Повідомлення:</b> ${user_message}</p>
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
