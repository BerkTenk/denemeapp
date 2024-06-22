using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class AppointmentController : ControllerBase
{
    private static List<Appointment> appointments = new List<Appointment>();

    [HttpPost]
    public IActionResult CreateAppointment([FromBody] Appointment appointment)
    {
        appointments.Add(appointment);
        return Ok();
    }

    [HttpGet]
    public IActionResult GetAppointments()
    {
        return Ok(appointments);
    }
}

public class Appointment
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DateTime Date { get; set; }
}