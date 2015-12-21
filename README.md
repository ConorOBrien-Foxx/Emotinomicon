# Emotinomicon
An emote-oriented language. [The IO page!](http://conorobrien-foxx.github.io/Emotinomicon/)

<!-- *😀😅😉😍😒😗😜😡😁😆😊😎😓😘😝😢😂😇☺️😏😔😙😞😣😃😈😋😐😕😚😟😤😄👿😌😑😖😛😠😥😦😫😰😵😺😿😧😬😱😶😻🙀😨😭😲😷😼👣😩😮😳😸😽👤😪😯😴😹😾👥🌑🌒🌓🌔🌕🌖🌗🌘0⃣1⃣2⃣3⃣4⃣5⃣6⃣7⃣8⃣9⃣🔟🔢🔤🔡🔠ℹ️📶🎦🔣➕➖➗✖️❗️❓❕❔‼️⁉️❌⭕️💯🔚🔜🔝🔛🔙♠️♣️♥️♦️⚪️⚫️🔘🔴🔵🔺🔻🔸🔹🔶🔷▪️▫️⬛️⬜️◼️◻️◾️◽️🔲🔳🔃➰💱💲#⃣🔀🔄↪️↩️🔂🔁◀️🔼🔽⏩⏪↖️⬆️↙️⬅️↘️➡️↗️⏬⬇️⏫↕️⤴️⤵️🆙🆗🆒🆓🆕🆖❎✅🚫📣📢🔓🔒🔐📪📫📬📭📥📤✉️📩📨📧🔫🔨🔩🔪🔧🔮💣🔭💰💸💽💾💻📲📱⌚️⏰📀💿🔋🚥🚦🎲🎱✋✋🏻✋🏻✋🏼✋🏽✋🏾✋🏿✊✊🏻✊🏼✊🏽✊🏾✊🏿👊👊🏻👊🏼👊🏽👊🏾👊🏿👾👻💀👽
-->
* 😀 - push 0 to the stack
* 😅 - push 1 to the stack
* 😉 - push 2 to the stack
* 😍 - push 3 to the stack
* 😒 - push 4 to the stack
* 😗 - push 5 to the stack
* 😜 - push 6 to the stack
* 😡 - push 7 to the stack
* 😁 - push 8 to the stack
* 😆 - push 9 to the stack
* 🔟 - push 10 to the stack
* 💯 - push 100 to the stack
* ➕ - add top two elements on stack
* ➖ - subtract top two elements on stack
* ➗ - divide top two elements on stack
* ✖ - multiply top two elements on stack
* ⏫ - take one character as input, push it to the stack
* ⏬ - output top of stack as character
* ⏪ - open loop
* ⏩ - close loop
* 🆙 - duplicate top of stack
* 😊 - drop top element of stack
* 😎 - reverse stack
* 😓 - pop N; pop top N elements of stack, and push them in reverse order
* 😘 - exponentiate top two elements
* 😝 - take log base B of N, popping N then B
* 😢 - pop N, push -N
* 😂 - pop N, push |N| (absolute value)
* 😇 - pop N, push 2N
* ☺️ - pop N, push 3N
* 😏 - pop N, push 4N
* 😔 - pop N, push N/2
* 😙 - pop N, push N/3
* 😞 - pop N, push N/4
* 😣 - pop N, push N^2
* 😃 - pop N, push N^3
* 😈 - pop N, push N^4
* 😋 - pop N, push sqrt[N]
* 😐 - pop N, push cbrt[N]
* 😕 - pop N, push root[4][N]
* 😚 - pop N, push floor[N]
* 😟 - pop N, push ceil[N]
* 😤 - pop N, push round[N]
* 😄 - pop N, push N+1
* 👿 - pop N, push N-1
* 😌 - pop N, M, push M % N (modulus)
* 😑 - pop N, push 2^N
* 😖 - pop N, push 3^N
* 😛 - pop N, push 4^N
* 😠 - pop N, push fibonacci[N]
* 😥 - pop N, push lucas[N]
* 😦 - push pi
* 😫 - push e
* 😰 - push phi
* 😵 - pop N, push ln(N) (`log_e(N)`)
* 😺 - pop N, push log(N) (`log_10(N)`)
* 😿 - pop N, push e^N
* 😧 - pop N, push 10^N
* 😬 - pop N, jump behind Nth command
* 😱 - pop C, N, and set the Nth command to C
* 😶 - pop N, push the character code of the Nth command
* 😻 - pop N, push N%2
* 🙀 - pushes a random number in [0,1)
* 😨 - pop N and output as a number
* 😭 - begin quote string
* 😲 - end quote string
* 😷 - 
* 😼 - 
* 👣 - 
* 😩 - 
* 😮 - 
* 😳 - 
* 😸 - 
* 😽 - 
* 👤 - 
* 😪 - 
* 😯 - 
* 😴 - 
* 😹 - 
* 😾 - 
* 👥 - 
* 🌑 - 
* 🌒 - 
* 🌓 - 
* 🌔 - 
* 🌕 - 
* 🌖 - 
* 🌗 - 
* 🌘 - 
* 🔢 - 
* 🔤 - 
* 🔡 - 
* 🔠 - 
* ℹ️ - 
* 📶 - 
* 🎦 - 
* 🔣 -
* ️❗ - pop N, push factorial[N]
* ️❓ - pop B, A, N, and, if N is truthy, push A; otherwise, push B
* ❕ - skip next command
* ❔ - pop N; if N is truthy, skip next command,
* ‼️ - pop N; push double_factorial[N]
* ⁉️ - pop N; if N is truthy, execute next command.
