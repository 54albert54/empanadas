import { useContext } from "react";
import { Presentacion } from "../Presentacion";
import { AppContext } from "../../context";

export const Quipes =()=>{
  const context =useContext(AppContext)
  let array = []
  class Quipes{
    constructor(id,clase,sabor,img,precios){
      this.id = id
      this.clase= clase
      this.sabor = sabor;
      this.img = img;
      this.precios = precios
    }
  }

  array.push(new Quipes(1,"quipes","Chivo","data:image/jpeg;base64,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",2))
 array.push(new Quipes(2,"quipes","Cangrejo","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYZGRgaHBoYGhocHBwYGhwYGBgdGhoaGBwcIS4lHB4rIRgaJjgmKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHhISHzQkJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0PzE/NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABBEAABAwIEAwUGBAUCBAcAAAABAAIRAyEEEjFBBVFhBiJxgZETMqGx0fAHQlLBYoKS4fEjQxVTctIUFjRUorLi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEAAgICAwACAwEAAAAAAAAAAAECERIhAzFBBFETImEy/9oADAMBAAIRAxEAPwDzrMkEgUsq5ujux9E4IcqJ5j7++SGbJCocIpU9LAPe3O1si/K/O0qF1NzbOBB6iEskSpRurEE4akJUjXIs0UUAGJw1ESnlGQ8URhm6LKE8py5OxYojhGGxdEPBMQgWIMpEp8qcNkX+/uyomhD+6OVGQQjCQxZkbX6XQEXSn1TqxbslhHTKhjRSsUjstsKMKBr/AKKRrlNAGXJsyGU0pgO5ygf8FI5yBwQFkeX7skpfZ9fkkkMxAUYJULSES0oESA80J6p0ikNnYcOpxRYP4QfW/wC6nyNcIIBHW/jqq/DKhfQY7doy/wBNh8APirVAgujQrzJyakzzJakzPxPA2FpLO47a/dPksDE0H03ZXiDY8wRzB3Xcvp93N4z5KjjsE2qwg2c27Ty6dQfotePnaljI14udp76ORa77sjCCpTyuLTqLfQ/uiauvvo71K1YQHNMQlnST6GOiUYThFgHCQCYImtJFgSNNDryRdEOUQdUnNVlmFeR3WOPlOnMBAWHcEJRkn6SpJ9Mja0pw2ylDU7WK9lEGTmja31RkI2j7+/BBNIcIwUIPiiASaGOmhOnal0BHljZOQpITlgQ9DSAgcx/UPokjjqnStDOSFRGKigRSuijHItNcjAVRpWzwzh/tGFxlt4adj5R8ZWcmoq2D5FFbNrsvVJpvZ+gyOUO29QfVabGTcX+axuAE06jqLrh4kEaEtn9p9AtrD+9815fyEsrXpxzaytGgBYjpPq23xUDWwHeEelldY3vfyz6f5VGucrHc1m/DI5riOGzAkCSP/rFx+/ksxo6Lp8CyST1hbPBuworOc91XKzNZob3r3iTYfFdvx5uTxOvg5UlTOALU2Ur2ZnZDBUG5nMzkfrdM+QgfBZmLrMa0hrGMbezGhtupAkrbkmod9ly+QonntHgtQtzHuWkAzm9PqjZw4Wkn4a+S6d75Ei5KzHjvdPmZ18FxS55M5ZfIlIgw2Ga38ot0CMU5+7Ky9lh1+W5ThgFt/kspTfpGTZJg+4Cf7LoMP2VGLpse+oWXdlAaDIsJJJtosWhRLyGtFyYHUr0vhWF9lSYzXKIJ66n4ldfwo5NyZpxtp2cefw2btiD5sH/cq9X8N3/lrsPi0j5Er0UFESvSxRvnI8qr/h/iW3bkd4PI+YCzMR2YxTPeoPj+EB3yleyuKAuScEUps8MrYZzbOBaeTgR81GGEL3KtRY8Q9rXA7OAd81j4zsphX/7eQ82HL8NPgpcClyfZ5IRCUbrvMd2BNzSqg/wvEf8AyE/JczxDgFejd9NwH6h3m/1DTzUyhSLUkzKlKbckixCVDiUmHn+5CdBnPVJTiOzkSkAnhKF0WYDtEmPJd/hMLkpMadQ0T4xf4yuBYDsvSqBzsa8D3mh3qFyfLbpHNzGNi6Lg4VG+80z9fvqtVr5AqMuLH6o307ZokLNquOHfmb3qT7kcvDkVxr91T8MDoRU9xzTYjXxVXiRysjx/sq2GeCIEkG7T46g8ip65D3MB903M8hcjzssGrkMDhVDuj4+JK7PgfE2sa5pN7EechclhqsMnaXEesD5p8DiM73umwho8tfiVtCThLJCi6Zt8T4qXvIJsBKwsVWL3hm2p89B+/mFDh3k1HTuT6aFFhGS4PIsST5NFvhCmUpTbbDt2XKmzG6kS4jZvLzVGtSl8fcKcY+lSDi97S9xuAQSCdrLIfxcOJIHzjzm5TfHN9IuPFKT0jWpsBPkBPhy5p30+Xqsj/jt4bTkWkzseQiNFcwvaJlPvmkXvnuhzstMRHedAl1ibbGPJQ+NySlvRquCa8O37L8IcCKr7W7gI5/m6dF1iyezfFBiaDKvdBMhwaZALTEGdD0WxC9ri44wjSGo46BCSJCStigHISnLkJKlgMnlMUMoGHmTByGUxKbQGRxTsvhq0ksyP/Uzu+rdCuI432RrUQXtHtGbuYLj/AKm6jylemypGvUSimVGTR4ZlH6/knXufd/S30CSnBF5ny+1qINSC6Psr2ZfiXZjLaTT3nx7x/Szrz5JCZm8F4JVxL8rBDR7zz7rfHmegXpFPDZWhhM5QGyd4ETG2i2KOEZSYGMaGtaLAfM8z1WdWMOXH8l6VnNy9AHCxPI7cuqycRRaWvabxEeBN/itujiB7p/ysnE1mipNiDLT56fFck61Rz0cwMW7DvI1by6Lcp49lRudhgbjkd/K91k8Tax4cDqJg/fgsLB1yxxvAP3/ZbLjXJG/SoqzpnYl7YbIjUeX+SlT4nTpsM65gcouTz308ei57GY95hs5fmRp5Ku25vurj8fX7HVx8F/6Nv/jTi4lrcoMyTeAf3UNTFOfBLpNmgRDQ0dNN/iqzGCROnhy+W3qhfWyWHO3OJ16/Bax44rSR1x4Yx8Da4NDptyjSRHveaZleR5RqZ8+QVasTcucc1iZJkzJsPCEVIgiSRy+ytVEpPZZNOznTYQDPI8o+/VGym0i58Lx5dN/sIGPBnNOUa2iQFM9zQe4ZsQRbyHjYpbL1Rv8AYnjRw1doMuY+GVA0SYk5HczH1C9oaF4v2EeGYukXHIC4ttoczCADzBcQOi9pat4dHHzdjFqBzVMAllWpkim5qByuOYon00mMiBQlPlhJyQAlCU5QEpgIlLMmcgJSGSZ06hlJIDw7sl2ffjK4Y2QwQ6o79LeXidvNe84fg7KdJtOm0NawQAPvVZvYTs6MJh2tI77u9UP8R28Bp5LqXCyFHQSdnG4xkWWBiwup4vTgkrmMY1cvNG1REkYuOxJaP4hp98lhYniJd3Yv96LX4jRzX5fJYlWnC4IxxdMxcaKr3GCek+Syva96TIHr4aqTF13OJaNBM9Y59FVD9B8tV38cK2zo4YVtkjZLj8FpU6Vr2Nr7bbb6qpSBbECc313VxkEzaeR2OnmnJndBE1I5Xkv5cokbEfe6ixDmg2FtpvrtHNRV5J89PjdR1X97QTbS172HwSit2XKXgeMpSQN4EGYt9d/OUVABtiIteTN+h/bomoUbgujnrAHrvr9m5gRBA3N9HR1HNaGZae/MC51nSQR4CNALGQfXZA4ZTmItF52kWlQ1amhzWIE8ptHnEeigdW1PLaes2+9+iWJTdGzwim51eiGmCalODMAHOA2Yg/EeIXvrHWXzz2WHtsXRpkSwuzOAt3WNc652mI531XqfaHtrSwwyN79W0MGjZ3edrXjUyNrrSH6rZy8v7S0dm6oACSQALkmwA5k7Bcj2i7eU6D2sot9u6ZqZHANay8w8SC+2nqdj5lxbjdfFP/1HuvAaxhLabQI0YZuTuZPoIrtwpkZbA2Ikn/CUuZLoceFvs9Bq/iS4nuYaGxID394/0iBtzTYb8RXzNWi3J/C4tIP80yNtlwlZrtA0xHhG9tJ39VAHGZ1vcHfxKy/K2a/hjR6rhe3mGeQHNewH8zgC0eJaTbS8brpKVdj25mPY8c2uDh6heJ1XExlAPTQ+EhNgcW+k7PRc5jp26aAzIO9jzVx5r7Ilw/R7TUUTnrJ7Ndo2YoZHNyVAJImWvjUsOvl81s1Ka2TswlFpkOdDnScEDggAs6SjSQOjqGNgIa74CNUeI1ICrwkwuJVMxKwMaxa+IOqy8SFhJWBhYli5vjTcjS4OLZsIiZJ2XU4lq4XtFiS55bbKy07zqR628lj+NOVhGOTMdxIkcxHkU9B40I8+gHIITrySotgybC3x/wArfw3j2X2u5RbQfDZTuEaiHTfltf0lR+xy667J2PGhGoiTOvI/cLNqzpSJaLQSA43PKbeO1+aNlQOAaWgFvrE//oKi+plIiReZ8zb5K2BeTANjFriBHS+3in4JNN7Ce6CTIInLrcg3kwekSDv4KA5rGLOkaax7x6aaInsy5iRI15GxHLQXhQP1JJnSNh1tumhN0BiX3JHLSyz3Yk/t5eO6tY1+ve6kfISs2m3M4AblaLo55yd0ja4Djn0XufTHfcxzGk/lzES5s2zWgTa++i6HhfB3PLqlXMC473md825KalgiynTLmZoM7NccwMeIBEz1U/8AxR73GjRu3UkataBcTz1+7LCcnI0ikivxUGk7Mwy0AQdDyiddZ6roeCUwWEuYcxuLg2IHWVk46s5lAUwyXB7SCbtga5j4R9hWOF8e77/aBrCGDMQDF+XLa3ULPG1Y7a0aLsOA4B/esfHyWXi8O1rjkAkgna0/enRTY/jlMAP1kCTe4OhAjTqhqP8AaNb7NhLpuCLZeYI15pONLRSf2UsQ0NADZgiTaOXK8Ko6qWzlcAfWbcvBbGOw4cwWuIBj5rIxNENJBkjX6/5UxZotomo4p9J7XNeQ8EOBbaCREzvb5r17s7xRuKoCoBDx3Ht1yvABMc2mZB6xsvDXw02M3EGfGy6/8OOLOpYkMdJZWhjjGj/9v4y3zXVxunsw5Y2rPTKtOFXc1aeJYqDmrY5iHKkjhJAHSLI4q5a6yOKNTfQjArLOxC06yz8QxZsZj1l5txl4dVeBYZ3HnN59LLtu1OL9lSMGHP7oMxHMrgH/AOfHqpSouESN4mxtElTUhufH6z1QFoB5/RSsAvB5fvKGbRWyXLEcunjZWWPJOVoAJBGgEzbK6dNPiqdOobgbiPr5o6eYEwcxNzJvGsXOs7aqaNVIldplLZs0Zhchoi/XRRUG7HVvMSLab20OiJjw7SYA25R1+7qTDVAHDNtOlj0nneExasky5gTsL6azci/SVSe8SbQYgfMHmrVSsYAtGwsdfHx8gU9FgIe4gTBgaQD0RdBIwq5uevJaHAaLc2d7HOY3WNBJtM/JZz7ugXkwuw7NUzTaG1G9yp3hJjQEEk7jf/JVTlUTnirlZcqM/wDFVWx3KTGkADV1jIA03+G6fiNOjhn0XsADYLHNk3zbnnY6/wCVNiXuoMzNg37rgCQHflDmg2BB1lZVTiL6zGNdTAAzuEjMZByuLTbSTZYK3vw10bWJqufnZTJhhGUtgl3OZ2uBbYT4ZmG7lbOIcR74Ny3NOYgHkYlWOGOLgczSHwS0wAXNFrR4eOq51xzOLoLHOcDAcQL9J3QloTNXimGblgEObc2OxktT0K78OKcvAhum5jSBuNkVcUmNDiC9waJIDQwg8rjlCyaOJa8n2hOYGW2kBosG+WnWfFOKdWD7O9wlR1am55YGGS0jUOA0dOo1i6y8fw5wBzTzi2U6kX5bK1hKAcwPIGY7DYRERrrKsY/Fl1F7PzATEi4NrbKGrdlRbRwzmFpMAwItr130Fx6LX7PNmvRBOWatMW1nOCD81l1Wugi94AnSOel9l0f4dYP2mMZmEhgNTldosba97KtYq6HN1Z7ViNFmvVzEPVJy6DjGSTSkgDoAs/ibbLQaVBiaeYK2hHJV1RrFamPolpWVXWTQzje2dKWsfYhjjbcyJt/T8VxL2yY3Pluu+7WszUTcCHNN97xA9V56+bdN/ipNYSpEjoMN0iZOxPSE9NzZgevVA18QNI6Xte/NS06YuT1Mabf3lJ6NYsNjLwd+sCdxyFpT128xB5R6R1n5quakmb218ZOp9FcLg6A7e2kDkD98knoapkFSrFy7aLCCD1nVVi+4cCJO0W6DxV3/AMKDE7662PXlp8VEcIQYA5CSNtinFomSk2TUWEuNxAnS+ovHQn75w46pbKPADkFYo4RznZGiTMaetvvdbOH4JlEvu/XeAUVbsUp1GjnMPgyLkX+X91tYfHOFP2b3v1BbABAaB7rt45R8leq4Doq1ThxI0RJWZKVFnD8RDWEOHcl3jMzEadI6qWtiGVqtNrAbEua+e6Babb6AbbrIp4QsZ7Nxvm7gJgai46XurGEouY8sMBogjlMj3Z/Nf4LJqjVOwuMipQdmo3YT3iCSQ+TPgD0tMqnTc1zJce+6SYI/NseV+iv8V4g6mXUrQQACbyDqb9ZG6wq1UtfoNIsb6QU0m0F0y9QOUZHQB7wzCwPjsdUdAzVLWssCbtAILt7zEeCq1auX8xIgW5G9/ki4bjhTDiBMgxbnE32Sa0M6DF8X9kWxTl3dBvfLzMKRuLB/1CBBsRMkbAXEAKrgHMBFZ4Bc4gbzYWF+f7qfAP8AaVHtdAa5pznbynkYCz/g/wCmRi3NcS5xJdPlysRou1/CvC9+tWiwDWNOk5jmd6BrfVcniWZWxrmtIEyenovU+zHDxh8Oyn+Y99//AFu1HlAb/KtuEXM9GzWrXAg332Ec1E56TnoCug5hSkkkgDeoVJEhSnRcD+HXaYYiiGPd/qUwGu5kRZ3n85XeNMhUgaMzimHkSuVxbYldw5giNtFy/GMJlKmSA4PtJBpuDrg9Y6rz91OXAWF4PTmT0Xb9r5FMxPvDTzXD5b3N9+sqC40gqlK8DQHX9iFbbScWnSOm8f3VanTk2kxy+/BWWUn6HTX1HTdRJM3i/wCElPBtcJzQf3U5oAA3Dj1ix5hXuE8LfVe1jGyTqbgNHXppOuotddRhuwtUnv1GBvQOdOk2IEeKWEmDnGPZx1KjpnGYn4HkFtcK7MVK8PAyMM94yNDfK3U358l3/B+zNKheM7/1uF/5RstoUgFrDiS7MZczfRzHDOzrKLYAzOPvPOp+g6BS4jg4IsF0eVC9i0pGLbZxlXhoHVVK2F6LtMRhQVl4jBFJodnF47h4cII8IsQeYOxVaoww4ODS0gD3ekFdRiMKRssbiWAzsLZLZ3GqiUEyoyo5fF4VpcHTmLYEG5I17xPn8FmVmEPJGnLWFsVeHVmSIznYjpOvVZeHruzgPBABIdPSxWOMkje0yF+aSS2xud46jkpBT7rTt+x5+sKxVxLNpi4NviOiu4ZwDMrgGiJBdqQdI+91Em0uhpbLeAw5qEE6NhwAMSfDom47UY2MggwWkB13TqC0axzPNVavEHMyimSHXOYQe7FrzaeS3ezXZpz/APVxANzIYRBN5zO3gybHXwsXGDdBKSjs0uyXBiWNq1hvnptO27XuHMTYefh2rHqpTarLAumMVFUjnlJydsmajAQtKeUxBZk6CUkAeA8E4w/DVW1GbaiTDm7gr6B7NceZiaTXsdPMbg7gjYr5saVs9n+PVMLUD2Osfeb+Vw69eqUZVoqUT6VlUOKYXO3qszsx2oo4pgcxwDx7zDYgroJlW9kUee8c7NPqUnwO8AXNG5c0SAFg8L/Dt5h1VwYCJLBd3mdB8V665gUDqaFFBbo4jD9hcMNWuJ2OYgi0WiFZp9jcMNWuPUuO/TRdWWIYRSY8pfZRwWBZTY1jGgBogc/M7kwPRW2hO5ieEyWMmlOmITAYlCXInBAQkALnKB5UrlE5qQUVKtIFZ9fAgrWLFE9qLGY7eGtF9VBjuFU6jcr2Bw1GxHgRcLac1RmmgRzVfszh3f7YaebO6foo8V2VpPDA2WZRl1LpbeZzHW+q6f2aQppOKfhSk16ZOA4BRpnM1ku/U7vGbCeQ05bnmtljU7WIw1HQNthtUjSha1SNakBK1HCTGKwymgCDKkrXsvD1SQFHzIWwmarGRCaazs3cGS4HHPpPD2PLXDcH58wvVOyn4jNfDMTDHaB35T/2nx9V5J7PqldVGRDi/T6gw+MY8S0gqZwXzjwbtJicNHs3nKPyOktjoNvJd7wX8UWGG4hjmH9Te+36/BWmjNo9OLVGWLN4X2mw1cTTqMd0BE+Y1C1WvadCqER5UJarBamyJAViExCnNNMWIArwmIU5Yh9miworuagLFZNNCWIAquYoXsV400JpoAoOpoTTV/2SE0UgKHs0vZq+MOjbhkhme1ikbSK0G4VNWqU2DM97WgakkAfFMCs2gp2UIXMcW/EXB0ZDHGq7kwZh/V7vxXDcX/EnE1ZbSaKTeY7z48TYeiWl2FHrHEOKUKDc1Wo1g6kCfDmei4bjX4jTLMMy3/MeIH8rdT5wvOXVH1HZ6j3Pdzccx+PyCNoUyl9GkYnQ/wDm3Gf80/0t/wC1JYHmkoyZeCKklIP5oJTpUbWE7qmcUpSlAVYi1A9qKEQdKaZDimRNcWmQSCNCLH1C2+H9qsXSMNruI5P74+N/isieabKFWRDgd3gPxOxDbPYx/UEtPxldDgvxSpH32Pb4Q4fAz8F5DA2TynmxYI94w34gYJ/+6G/9QLfmFrYftHhn+7Wpnwc36r5yBROhPMX4j6ZZjabtHtPmFKKrDuF8xMruGhI8CQp2cUrN92rUHg9/1RkhYH0vLOYS7nML5vHHcTP/AKir/W/a3NMeP4n/ANxV/rd9U8kL8bPpDucwhcWcwvmx3G8Sda9T+t/1UT+JVjrUef53n90KSDA+kn4qk27ntHiQFnYrtNg2e/Xpj+ds/NfOzqpJuSfEyoylYYHueL/EfAs915ef4GuPxiFz+P8AxabpSoOPV5DB6NkryvLKcUyjIMTreIfiJjalmubTB/QJd/U6fkuZxeKq1TNR73n+Jxd6TYeSBlFGxsJOQ6I20t1OxkIs+3VFZQ2NJDAosqFrfv78UcJDVjyf1ffqkmgJ0FFAIvvdBOyIOP34plodpOiMOQZrXCWZFD6CDuaYPQE3ThAhwYCIHZB98kpugA3JAJgU4KAFF05slmSlIaSGCYAIgY3SGqBAuaoizcKeBKAhOxNDZU4Z9+KPKkQixUCGXRNZ0RNCIFKwUSPKpMiV04KApCgpwjASA+/v7ugKAIjZNCkLUgUCoBohFmOidoThqCUhZDz+SSLMevokgrRmNUw+/VJJBaEo2bJJKvB+jfQIth5pJIAWxS+iSSAG3T8/H6JJJCXQx0KM/RJJALpgHQeIRb+X1SSQA7fp8k/38CkkkHg4+/gi5p0kAE3T75hMPqkkgYw3RO1++aSSCGONVM3QJJJFLoTtPP6pDUeXySST8JZG7X1Up0HmkkgSEkkkpEf/2Q==",2))
 array.push(new Quipes(3,"quipes","Queso","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7MOW1AOEI04WD7pg1pQVAUzg5BoYSQio0g&usqp=CAU",2))
 array.push(new Quipes(4,"quipes","Mixtos","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjDRsL1WyLqXj0-UbFJT1Y8Vuj53H_CDvVw&usqp=CAU",5))
 
 
 
  return(
  <>
    {array.map((data,index )=>(
      <Presentacion key={index} data={data} productos={context.quipes} setProducto={context.AgregarQuipes} />))}
  </>
)
};