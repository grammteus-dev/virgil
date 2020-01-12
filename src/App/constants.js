
const { NODE_ENV } = process.env;

export const DATA_URL = NODE_ENV === 'production' ? '' : 'http://localhost:8000';

export const characters = {
  ";___": ";",
  "#___": "·",
  "A___": "Α",
  "B___": "Β",
  "G___": "Γ",
  "D___": "Δ",
  "E___": "Ε",
  "Z___": "Ζ",
  "H___": "Η",
  "TH__": "Θ",
  "I___": "Ι",
  "K___": "Κ",
  "L___": "Λ",
  "M___": "Μ",
  "N___": "Ν",
  "KS__": "Ξ",
  "O___": "Ο",
  "P___": "Π",
  "R___": "Ρ",
  "S___": "Σ",
  "T___": "Τ",
  "Y___": "Υ",
  "PH__": "Φ",
  "X___": "Χ",
  "PS___": "Ψ",
  "W___": "Ω",
  "I:__": "Ϊ",
  "Y:__": "Ϋ",
  "a___": "α",
  "b___": "β",
  "g___": "γ",
  "d___": "δ",
  "e___": "ε",
  "z___": "ζ",
  "n___": "η",
  "th__": "θ",
  "i___": "ι",
  "k___": "κ",
  "l___": "λ",
  "m___": "μ",
  "v___": "ν",
  "ks__": "ξ",
  "o___": "ο",
  "p___": "π",
  "r___": "ρ",
  "s___": "ς",
  "6___": "σ",
  "t___": "τ",
  "u___": "υ",
  "ph__": "φ",
  "x___": "χ",
  "ps__": "ψ",
  "w___": "ω",
  "i:__": "ϊ",
  "a)__": "ἀ",
  "a(__": "ἁ",
  "a)`_": "ἂ",
  "a(`_": "ἃ",
  "a)'_": "ἄ",
  "a('_": "ἅ",
  "a)~_": "ἆ",
  "a(~_": "ἇ",
  "A)__": "Ἀ",
  "A(__": "Ἁ",
  "A)`_": "Ἂ",
  "A(`_": "Ἃ",
  "A)'_": "Ἄ",
  "A('_": "Ἅ",
  "A)~_": "Ἆ",
  "A(~_": "Ἇ",
  "e)__": "ἐ",
  "e(__": "ἑ",
  "e)`_": "ἒ",
  "e(`_": "ἓ",
  "e)'_": "ἔ",
  "e('_": "ἕ",
  "E)__": "Ἐ",
  "E(__": "Ἑ",
  "E)`_": "Ἒ",
  "E(`_": "Ἓ",
  "E)'_": "Ἔ",
  "E('_": "Ἕ",
  "n)__": "ἠ",
  "n(__": "ἡ",
  "n)`_": "ἢ",
  "n(`_": "ἣ",
  "n)'_": "ἤ",
  "n('_": "ἥ",
  "n)~_": "ἦ",
  "n(~_": "ἧ",
  "H)__": "Ἠ",
  "H(__": "Ἡ",
  "H)`_": "Ἢ",
  "H(`_": "Ἣ",
  "H)'_": "Ἤ",
  "H('_": "Ἥ",
  "H)~_": "Ἦ",
  "H(~_": "Ἧ",
  "i)__": "ἰ",
  "i(__": "ἱ",
  "i)`_": "ἲ",
  "i(`_": "ἳ",
  "i)'_": "ἴ",
  "i('_": "ἵ",
  "i)~_": "ἶ",
  "i(~_": "ἷ",
  "I)__": "Ἰ",
  "I(__": "Ἱ",
  "I)`_": "Ἲ",
  "I(`_": "Ἳ",
  "I)'_": "Ἴ",
  "I('_": "Ἵ",
  "I)~_": "Ἶ",
  "I(~_": "Ἷ",
  "o)__": "ὀ",
  "o(__": "ὁ",
  "o)`_": "ὂ",
  "o(`_": "ὃ",
  "o)'_": "ὄ",
  "o('_": "ὅ",
  "O)__": "Ὀ",
  "O(__": "Ὁ",
  "O)`_": "Ὂ",
  "O(`_": "Ὃ",
  "O)'_": "Ὄ",
  "O('_": "Ὅ",
  "u)__": "ὐ",
  "u(__": "ὑ",
  "u)`_": "ὒ",
  "u(`_": "ὓ",
  "u)'_": "ὔ",
  "u('_": "ὕ",
  "u)~_": "ὖ",
  "u(~_": "ὗ",
  "Y(__": "Ὑ",
  "Y(`_": "Ὓ",
  "Y('_": "Ὕ",
  "Y(~_": "Ὗ",
  "w)__": "ὠ",
  "w(__": "ὡ",
  "w)`_": "ὢ",
  "w(`_": "ὣ",
  "w)'_": "ὤ",
  "w('_": "ὥ",
  "w)~_": "ὦ",
  "w(~_": "ὧ",
  "W)__": "Ὠ",
  "W(__": "Ὡ",
  "W)`_": "Ὢ",
  "W(`_": "Ὣ",
  "W)'_": "Ὤ",
  "W('_": "Ὥ",
  "W)~_": "Ὦ",
  "W(~_": "Ὧ",
  "a`__": "ὰ",
  "a'__": "ά",
  "e`__": "ὲ",
  "e'__": "έ",
  "n`__": "ὴ",
  "n'__": "ή",
  "i`__": "ὶ",
  "i'__": "ί",
  "o`__": "ὸ",
  "o'__": "ό",
  "u`__": "ὺ",
  "u'__": "ύ",
  "w`__": "ὼ",
  "w'__": "ώ",
  "a)i_": "ᾀ",
  "a(i_": "ᾁ",
  "a)`i": "ᾂ",
  "a(`i": "ᾃ",
  "a)'i": "ᾄ",
  "a('i": "ᾅ",
  "a)~i": "ᾆ",
  "a(~i": "ᾇ",
  "A)i_": "ᾈ",
  "A(i_": "ᾉ",
  "A)`i": "ᾊ",
  "A(`i": "ᾋ",
  "A)'i": "ᾌ",
  "A('i": "ᾍ",
  "A)~i": "ᾎ",
  "A(~i": "ᾏ",
  "n)i_": "ᾐ",
  "n(i_": "ᾑ",
  "n)`i": "ᾒ",
  "n(`i": "ᾓ",
  "n)'i": "ᾔ",
  "n('i": "ᾕ",
  "n)~i": "ᾖ",
  "n(~i": "ᾗ",
  "H)i_": "ᾘ",
  "H(i_": "ᾙ",
  "H)`i": "ᾚ",
  "H(`i": "ᾛ",
  "H)'i": "ᾜ",
  "H('i": "ᾝ",
  "H)~i": "ᾞ",
  "H(~i": "ᾟ",
  "w)i_": "ᾠ",
  "w(i_": "ᾡ",
  "w)`i": "ᾢ",
  "w(`i": "ᾣ",
  "w)'i": "ᾤ",
  "w('i": "ᾥ",
  "w)~i": "ᾦ",
  "w(~i": "ᾧ",
  "W)i_": "ᾨ",
  "W(i_": "ᾩ",
  "W)`i": "ᾪ",
  "W(`i": "ᾫ",
  "W)'i": "ᾬ",
  "W('i": "ᾭ",
  "W)~i": "ᾮ",
  "W(~i": "ᾯ",
  "a*__": "ᾰ",
  "a-__": "ᾱ",
  "a`i_": "ᾲ",
  "ai__": "ᾳ",
  "a'i_": "ᾴ",
  "a~__": "ᾶ",
  "a~i_": "ᾷ",
  "A*__": "Ᾰ",
  "A-__": "Ᾱ",
  "A`__": "Ὰ",
  "A'__": "Ά",
  "Ai__": "ᾼ",
  "_i__": "ι",
  "_)__": "᾿",
  "_~__": "῀",
  "_:~_": "῁",
  "n`i_": "ῂ",
  "ni__": "ῃ",
  "n'i_": "ῄ",
  "n~__": "ῆ",
  "n~i_": "ῇ",
  "E`__": "Ὲ",
  "E'__": "Έ",
  "H`__": "Ὴ",
  "H'__": "Ή",
  "Hi__": "ῌ",
  "_)`_": "῍",
  "_)'_": "῎",
  "_)~_": "῏",
  "i*__": "ῐ",
  "i-__": "ῑ",
  "i:`_": "ῒ",
  "i:'_": "ΐ",
  "i~__": "ῖ",
  "i:~_": "ῗ",
  "I*__": "Ῐ",
  "I-__": "Ῑ",
  "I`__": "Ὶ",
  "I'__": "Ί",
  "_(`_": "῝",
  "_('_": "῞",
  "_(~_": "῟",
  "u*__": "ῠ",
  "u-__": "ῡ",
  "u:`_": "ῢ",
  "u:'_": "ΰ",
  "p)__": "ῤ",
  "p(__": "ῥ",
  "u~__": "ῦ",
  "u:~_": "ῧ",
  "Y*__": "Ῠ",
  "Y-__": "Ῡ",
  "Y`__": "Ὺ",
  "Y'__": "Ύ",
  "P(__": "Ῥ",
  "_:`_": "῭",
  "_:'_": "΅",
  "_`__": "`",
  "w`i_": "ῲ",
  "wi__": "ῳ",
  "w'i_": "ῴ",
  "w~__": "ῶ",
  "w~i_": "ῷ",
  "O`__": "Ὸ",
  "O'__": "Ό",
  "W`__": "Ὼ",
  "W'__": "Ώ",
  "Wi__": "ῼ",
  "_'__": "´",
  "_(__": "῾",
  "u:__": "ϋ"
};
