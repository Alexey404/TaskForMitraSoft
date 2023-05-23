import { Card, Container } from 'react-bootstrap'

export const AboutMe = () => {
  return (
    <div>
      <Container>
        <div className='card-сontainer'>
          <Card>
            <Card.Body>
              <h2>Волик Алексей</h2>
              <Card.Title>22 года, родился 1 марта 2001</Card.Title>

              <h4>Контакты:</h4>
              <Card.Text>
                +7 (918) 077-05-22 Желательно писать в Telegram
              </Card.Text>
              <Card.Text>volik.aiii@gmail.com</Card.Text>
              <h4>Основное</h4>
              <Card.Text>
                Я Frontend разработчик с опытом работы 1 год.
              </Card.Text>
              <Card.Text>
                Хорошо знаю JS и чуть больше базового понимания TS.
              </Card.Text>

              <Card.Text>
                Мой гит:{' '}
                <a href='https://github.com/Alexey404?tab=repositories'>
                  https://github.com/Alexey404?tab=repositories
                </a>
              </Card.Text>

              <h4>Навыки</h4>
              <Card.Text>
                React, Apollo GraphQL, Redux, Express, TypeScript, Node.js,
                Express
              </Card.Text>
              <h4>Личные качества</h4>
              <Card.Text>
                Прямолинейный, честный, неконфликтный, немного скромный
              </Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h2>Моя история 'Войти в IT'</h2>
              </div>
              <h4>Начало</h4>
              <Card.Text>
                Тут вы меня попросили написать о себе и я не знаю в каком плане
                возможно вы хотели узнать лично обо мне или о моём опыте по
                этому я напишу немного обо всём.
              </Card.Text>
              <h4>Как я решил стать разработчиком</h4>
              <Card.Text>
                Я окончил колледж на на проффесию электрика (2016-2020) но душа
                к этому моя не лежала и перспективы были туманны. Но спустя
                несколько месяцев после окончания я увидел рекламу курсов
                программирования. И в этот момент я понял что, чтобы стать
                программистом не обязательно заканчивать учебное заведение. С
                этого начался мой интерес к программированию.
              </Card.Text>
              <h4>Как я выбирал направление и как обучался</h4>
              <Card.Text>
                С самого начала я пошёл в ютуб смотреть что такое это ваше
                программирование и как начать. Часто натыкался на ролики где
                рассказывали что в онлайн курсах мало чему учат и в целом лучше
                обучаться самому и так как у меня не было средств на обучение
                выбор был очевиден я, решил учиться сам.
              </Card.Text>
              <Card.Text>
                После того как я определился с тем что начну учиться сам я начал
                выбирать направление и посмотрел множество видео. Так как я с
                самого начала был уверен, что у меня получиться писать код на
                любом языке программирования то стоял выбор больше о
                востребованности направления и так как во Frontend довольно
                низкий порог входа (по крайней мере тогда было так) я выбрал
                его.
              </Card.Text>
              <Card.Text>
                Я начал как полагается с HTML и CSS всё так же изучал по видео
                из ютуба, но на вёрстку я уделил не так уж и много времени.
                Почему-то я решил что я могу пропустить JS (сейчас я хорошо знаю
                нативный JS) и начал сразу с React. Это был длинный курс из
                более чем 100 видео и очень нудным, но я думал это нормально так
                как это обучение. Во время обучения я бросал обучение на пару
                месяцев была депрессия и совсем ничего не хотелось, но в итоге я
                продолжил (ну как продолжил мне пришлось начать заново так как я
                забыл где, остановился, но в итоге мне хватило сил вытерпеть эту
                нудятину) спустя долгое время я начал многое понимать в React и
                Redux постепенно переходя на TS. В итоге я досмотрел курс и
                начал пытаться писать код сам. Это были такие задачи как Todo
                или погода (всё это есть в GitHub). В их написании я использовал
                разные UI библиотеки такие как Antd, MUI, Styled, и разные
                препроцессоры. Где-то в этот момент я осознал что я начал хорошо
                понимать Js и начал более подробно изучать его. Я смотрел ролики
                с объяснением, что такое rest, spread операторы, как работают
                пропсы в функциях, в чём различие обычных функций и стрелочных,
                промисы и многое другое.
              </Card.Text>
              <h4>Поиск первой работы</h4>
              <Card.Text>
                После того как я получил определённую базу в React-Redux и с
                уверенностью начал искать работу (это было лето 2021 года) и
                закрывать пробелы в знаниях, делая тестовые задания (они тоже
                есть на GitHub). В начале сентября откликнулись на моё резюме и
                сказали что код у меня хороший, но так как у нас используется
                PHP сделай небольшое тестовое задание. Я сделал это задание за
                пару дней (оно так же есть в GitHub) и мне сказали что всё
                хорошо и попросили резюме на английском так как компания была
                англоязычная, но с тим лидом я общался на русском. В итоге 13
                сентября меня приняли на работу. Оказывается это была новая
                команда и я был первым не считая тим лида.
              </Card.Text>
              <h4>О работе</h4>
              <Card.Text>
                Команда была новая, а вот код был далеко не новый. В нашем
                распоряжении было около 10 сервисов и что это за сервисы я до
                сих пор не сильно понимаю. Это вроде бы были сервисы
                предназначенные для внутреннего пользования других компаний и
                была кастомизация сервисов которую я писал смену иконок и
                картинок бэкграунд главной страницы. В основном мы писали код в
                нескольких новых сервисах где используется React + Apollo
                GraphQL и NodeJs Express понемногу перенося функционал из старых
                сервисов в которых был PHP и на фронтенде и на бэкенде и папочка
                с JS. Так же был сервис управляющий всеми сервисами в котором
                можно было включать и выключать сервисы для определённых
                доменов.
              </Card.Text>
              <h4>Процесс работы</h4>
              <Card.Text>
                С начала как полагается джуну мои задачи были на уровне, что то
                сверстать. Понемногу давая мне задачи посложнее на фронтенде
                работы с данными и так далее. Так же меня познакомили с CI/CD
                pipeline и тестами Cypress. После нескольких месяцев простой
                работы меня начали обучать работы с бэкендом (забыл сказать это
                вакансия была на фулстек разработчика) и мне нужно было
                отобразить менюшку взяв её из базы данных и так на лёгкой задаче
                я понял что такое models, controllers, service и route и
                передачей файлов через GraphQL, но было немного непривычно так
                как писалось на классах. И с этого момента у меня были абсолютно
                разные задачи. Задачи выдавались в Jira и на мне было примерно
                3-4 задачи одновременно с разным приоритетом и если у меня
                возникали сложности с задачей я начинал делать другую, а на
                Следующий день мы с утра созванивались так как была разница во
                времени и моё утро было его вечером и обсуждали старые задачи и
                новые в основном я спрашивал то как он хотел бы видеть решение
                потому что я понимаю что я могу решить задачу разными способами
                и то как я её сделаю возможно будет очень замороченной по этому
                я всё уточнял заранее обдумывая последовательность того как я
                буду делать задачу и в моментах где я в чём то сомневаюсь я
                спрашиваю и когда я знаю что я буду делать приступал к задаче.
                Но бывает так не всегда потому что нужно сначала начать делать,
                а только потом понимаешь в чём сложность. Примерно в таком темпе
                длилась моя повседневность.
              </Card.Text>
              <h4>Расставание</h4>
              <Card.Text>
                В какой-то момент в компании решили начать сделать ещё несколько
                новых сервисов. Угадайте кому поручили верстать? Сначала мне
                дали сверстать первый макет всё было хорошо, но через какое то
                время мне дали второй макет (дала мне это макет менеджер мы с
                ней общались на английском). Но так как у меня были и другие
                задачи, что бы всё было понятно я сказал об этом макете тим лиду
                и в этот момент всё началось. Вся суть в том что тим лид подумал
                что это новый дизайн для того сервиса который я сверстал с
                начала и сказал мне не делать его, но через неделю мне снова
                написала проект менеджер и попросила показать результат. Я ей
                объяснил ситуацию и она попросила сделать этот макет и я снова
                сказал об этом тим лидеру и он сказал мне что не нужно делать и
                он поговорит с ней. Спустя ещё неделю мне снова пишет проект
                менеджер и просит результат я снова попытался ей объяснить
                ситуацию и попросил поговорить об этом с тим лидером так же я
                сказал об этом тим лидеру и сказал ему что вы друг друга не
                поняли и на следующий день он сказал что да они друг друга не
                поняли и он мне сказал что проект менеджер говорила о том что ей
                проще нанять верстальщика индуса чем буду это делать я. В конце
                концов я заранее задумывался о том что бы уйти потому что было
                много сложностей с получением зарплаты из-за санкций я сменил
                несколько банков, я хотел найти работу в России, что бы было
                минимум проблем начиная от получения зарплаты до коммуникации с
                командой. И так как опыт работы был уже год я думал найти работу
                будет легче, но увы...
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  )
}
