$TCPConnection = New-Object System.Net.Sockets.TcpClient("localhost", 1234)
$Writer = New-Object System.IO.StreamWriter($TCPConnection.GetStream())
$Writer.Write("update")
$Writer.Flush()
$Writer.Close()
$TCPConnection.Close()