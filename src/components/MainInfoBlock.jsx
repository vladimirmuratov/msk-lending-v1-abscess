import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

export const MainInfoBlock = memo(() => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingTop: { xs: '50px', sm: '100px' },
                paddingBottom: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >
            <Box
                component="article"
                sx={{
                    paddingBottom: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Быстрая диагностика и эффективное лечение любых абсцессов
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Абсцесс </Box> — штука
                    неприятная и, правда, требующая быстрых решений. Тут не до ожидания записи в поликлинике: больно,
                    опасно откладывать, да и нервы никто не отменял. <Box component="span" sx={{ color: 'var(--red)' }}>Мы
                    берём на себя буквально всё</Box> — от диагностики до финального визита врача, и вот в этом наша
                    реальная сила.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginTop: '10px' }}>
                    Если коротко: <Box component="span" sx={{ color: 'var(--red)' }}>найдём клинику</Box> (не абы какую,
                    а проверенную — у нас целый список партнёров), <Box component="span" sx={{ color: 'var(--red)' }}>договоримся
                    о госпитализации безо всяких очередей, сопроводим вас на каждом этапе и возьмём на себя бумажную
                    волокиту</Box>. Наши пациенты попадают к тем специалистам, которые действительно разбираются в
                    сложных случаях абсцессов — это люди, которые ежедневно сталкиваются с подобными ситуациями и точно
                    знают, как действовать быстро и грамотно.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginTop: '10px' }}>
                    По сути — <Box component="span" sx={{ color: 'var(--red)' }}>вы просто звоните нам или оставляете
                    заявку</Box>, а дальше процесс двигается по накатанной. Это как личный навигатор по московской
                    медицине: если ситуация нестандартная или тяжелая — для нас это рабочий режим.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginTop: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Весь путь, начиная с первой консультации и до
                        выписки</Box> (даже если он окажется длиннее обычного), мы проходим рядом с вами: рассказываем,
                    предупреждаем о нюансах лечения абсцессов, честно обсуждаем прогнозы. Ну потому что только так всё и
                    должно быть устроено.
                </Typography>
            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '10px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Когда нужно срочно обращаться?
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: 18, sm: 20 },
                        fontWeight: 400
                    }}
                >
                    Если у человека:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Резкая боль и уплотнение в месте воспаления
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Когда воспаление только начинается, обычно первым сигналом становится невыносимо резкая боль
                            — особенно если случай тяжелый. Причем это не просто дискомфорт: бывает, что любое
                            прикосновение или даже легкое движение в этой зоне вызывает настоящий всплеск ощущений,
                            будто там иголка под кожей. Вместе с болью часто появляется плотное или твердое образование
                            на месте воспаления — чувствуется, что ткань изменилась, стала “каменистой”. Это как если бы
                            внутри вдруг вырос маленький “узелок”, который точно не впишется ни в один анатомический
                            атлас.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Повышение температуры
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Плотное место воспаления ощущается горячим и напряженным — любые попытки нащупать границы
                            заканчиваются резкой болью. Внешне кожа может покраснеть и даже чуть поблескивать от
                            натяжения. Этот клубок боли говорит о том, что внутри скапливается гной — и телу надо время
                            (и помощь врача), чтобы справиться с этим вмешавшимся захватчиком.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Покраснение, отёк, пульсация
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Всё дело в том, что в ответ на инфекцию тело направляет к повреждённому месту свои защитные
                            силы. Кровь приливает сильнее, отсюда и покраснение с жаром. Она приносит иммунные клетки,
                            которые поедают бактерии, погибают сами — и этот биологический «бой» превращается в гной.
                            Набухание (тот самый видимый отёк) — результат того, как организм пытается отградить очаг
                            воспаления от всего остального.
                            <br />
                            А вот пульсация — интересный симптом. Иногда кажется, будто внутри у тебя отдельная
                            маленькая «сердцевинка» стучит в такт вашему сердцу. Это из-за усиленного притока крови к
                            воспалённой области; сосуды расширяются, кровь движется мощнее — так устроен наш
                            естественный механизм борьбы с чужаками.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Слабость, озноб
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Это организм бьёт тревогу от того, что где-то внутри идёт настоящая «война» между
                            иммунитетом и бактериями. Появляется озноб — а это фактически механизм встряхнуть тело
                            (буквально! ) для повышения температуры: иммунитет так надёжнее работает. Но для самого
                            человека это малоприятно: едва дотерпел до вечера — а там уже температура под 38, всё болит.
                            <br />
                            Вот почему слабость и озноб идут рука об руку с абсцессами: они словно негромкий звонок об
                            опасности внутри. Да-да, даже если внешних проявлений пока нет или кажется, что «просто
                            устал». Это не простуда и не «пережду пару дней» — здесь организм точно борется с чем-то
                            серьёзным.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Выделение гноя
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Это событие, мягко говоря, не из приятных, но организм словно вздыхает с облегчением. Как
                            только лишнее выходит наружу, запускается природная программа по уборке — ткани начинают
                            очищаться от остатков инфекции, чтобы вернуть себе утраченное равновесие. В жизни это что-то
                            вроде капитальной уборки.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Ухудшение состояния после операции или травмы
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Иммунитет после хирургического вмешательства естественно истощён — организм тратит все силы
                            на восстановление. К этому добавьте, например, недостаточно тщательный уход за швом или
                            какую-то мелкую оплошность с гигиеной — и вот уже создаётся благоприятная почва для
                            инфекции. Если где-то вдруг дали слабину с обработкой инструментов или рук (банальное
                            нарушение асептики), микробы легко могут воспользоваться этой лазейкой и «обосноваться» в
                            ране.
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            color: 'var(--red)',
                            marginTop: '20px',
                            fontSize: { xs: 20, sm: 22 },
                            textTransform: 'uppercase',
                            borderLeft: '2px solid var(--red)',
                            paddingLeft: '25px'
                        }}
                    >
                        Задержка может привести к опасным осложнениям!
                    </Typography>

                </Box>
            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Наши услуги по лечению абсцессов
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Экстренная госпитализация
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Когда ситуация требует немедленного реагирования, мы не теряем времени. Пациент сразу
                            получает направление в подходящее отделение — будь то классическая хирургия, отделение
                            гнойной хирургии, абдоминальная хирургия или более узкие направления вроде ЛОР или
                            гинекологии. Всё зависит от того, где именно выявлен абсцесс: ухо это, печень или мягкие
                            ткани.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Диагностика в темпе «день в день»
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Не надо недели жить в тревоге и ходить по кабинетам. Мы собираем весь нужный инструментарий
                            — УЗИ, КТ, МРТ, анализы крови и пункция (если потребуется) — чтобы за 24 часа понять всю
                            картину: насколько глубокий процесс, есть ли осложнения и что делать дальше.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Работаем с любой сложностью
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            На практике встречается всё: от банального фурункула до редких послеоперационных абсцессов.
                            Сюда же — параректальные (рядом с прямой кишкой), внутрибрюшные, лёгочные образования,
                            патология у детей или при беременности... Список огромен, но алгоритмы чёткие.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Не всегда приходится резать
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Если есть шанс справиться без операции — используем его до конца. Подбираем антибиотики «под
                            ваш случай», контролируем воспаление и даже можем выполнить дренирование под контролем
                            аппарата УЗИ — точно и минимально травматично.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                А если всё-таки операция?
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            У нас есть доступ к лучшим хирургическим центрам Москвы. Причём сегодня практически половину
                            вмешательств проводят малотравматично: через микроразрезы или прокол. Люди возвращаются
                            домой гораздо быстрее.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Вас никто не бросит
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Мы помогаем организовать перевод из клиники в клинику, даём все документы для страховки (или
                            работы), подробно общаемся с родственниками и всегда на связи 24/7. Реально всегда; потому
                            что спокойствие пациента иногда важнее самой процедуры.
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            color: 'var(--main-color)',
                            marginTop: '20px',
                            fontSize: { xs: 18, sm: 20 },
                            borderLeft: '2px solid var(--main-color)',
                            paddingLeft: '25px'
                        }}
                    >
                        В общем, неважно насколько чаще вам попадались огромные абсцессы после травмы или обычные
                        подкожные шишки — наши принципы одинаковы: скорость, прозрачность решений и реальная поддержка
                        на каждом этапе.
                    </Typography>

                </Box>
            </Box>

            <Box
                component="article"
                id="whyWe"
                sx={{
                    scrollMarginTop: { xs: '120px', sm: '50px' },
                    paddingX: '12px',
                    paddingY: { xs: '25px', sm: '50px' },
                    color: 'var(--black)'
                }}
            >

                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300,

                    }}
                >
                    Почему пациенты обращаются именно к нам
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start', marginTop: '7px' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 } }}>
                            <Box component="span" sx={{color: 'var(--red)', fontSize: { xs: 22, sm: 24 }}}>Госпитализация в топовые клиники Москвы</Box>
                            <br />
                            Мы сотрудничаем с ведущими медицинскими центрами — это и федеральные институты вроде
                            «Пирогова» и «Вишневского», и крупные частные клиники, где врачи каждый день работают с
                            самыми сложными случаями. По сути, мы открываем дверь туда, куда обычно попадают только по
                            знакомству или многомесячной «очереди на лечение».
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start', marginTop: '7px' }} />
                        <Typography sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 } }}>
                            <Box component="span" sx={{color: 'var(--red)', fontSize: { xs: 22, sm: 24 }}}>Всё решается максимально быстро</Box>
                            <br />
                            Знаете, как раздражает бесконечное хождение по кабинетам и ожидания квоты, которые ни разу
                            не заканчиваются вовремя? В нашей практике такого просто нет. Всё оформление — за считаные
                            дни (а иногда и часы), без бумажной волокиты и томительного ожидания.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start', marginTop: '7px' }} />
                        <Typography sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 } }}>
                            <Box component="span" sx={{color: 'var(--red)', fontSize: { xs: 22, sm: 24 }}}>Подходящий хирург под каждую задачу</Box>
                            <br />
                            Абсцесс абсцессу рознь — и один врач точно не может быть лучшим во всём. Поэтому мы
                            подбираем узкого специалиста именно под ваш случай, учитывая локализацию проблемы. Если
                            нужна консультация редкого эксперта — найдём его, даже если для этого придётся на голову
                            встать.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start', marginTop: '7px' }} />
                        <Typography sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 } }}>
                            <Box component="span" sx={{color: 'var(--red)', fontSize: { xs: 22, sm: 24 }}}>Конфиденциальность для нас — не пустой звук</Box>
                            <br />
                            Случаи бывают разные, ситуации тоже, и мы здесь как раз за тем, чтобы всё оставалось
                            исключительно между врачом и пациентом. Ваше дело — лечиться и выздоравливать, а обо всём
                            остальном мы позаботимся без лишнего шума.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckBoxOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start', marginTop: '7px' }} />
                        <Typography sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 } }}>
                            <Box component="span" sx={{color: 'var(--red)', fontSize: { xs: 22, sm: 24 }}}>Помогаем добраться до места лечения без лишних нервов</Box>
                            <br />
                            Если вы живёте не в Москве — большой город часто пугает. Для жителей регионов России или
                            стран СНГ организуем транспортировку в клинику: поможем собрать документы, подскажем
                            варианты дороги, при необходимости встретим в аэропорту. Мы точно знаем: путь к хорошей
                            медицине не должен быть изматывающим квестом!
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
});
